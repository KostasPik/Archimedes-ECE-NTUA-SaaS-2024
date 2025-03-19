from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager
from .models import db, Submission, SubmissionStatusEnum
from werkzeug.utils import secure_filename
from flask_jwt_extended import jwt_required, get_jwt_identity
import os
import uuid
from sqlalchemy import desc, text
from sqlalchemy.exc import SQLAlchemyError
from .schemas import RunSubmissionRequest
import pika
import json
from .validator import validate_json
import shutil
import numpy as np

SUBMISSIONS_PER_PAGE = 20
INITIAL_SUBMISSION_STATUS = 'IDLE'
UPLOAD_FOLDER = 'uploads/'

app = Flask(__name__)
app.config.from_object("problem.config.Config")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
JWTManager(app)
db.init_app(app)



rabbitmq_user = os.getenv('RABBITMQ_USER', 'root')
rabbitmq_pass = os.getenv('RABBITMQ_PASS', 'root')
credentials = pika.PlainCredentials(rabbitmq_user, rabbitmq_pass)
connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq', credentials=credentials, heartbeat=0))
channel = connection.channel()
channel.queue_declare(queue='task_queue', durable=True)

# Function that places a submissions into the queue for execution
def send_to_queue(message):
     channel.basic_publish(
        exchange='',
        routing_key='task_queue',
        body=message,
        properties=pika.BasicProperties(
            delivery_mode=pika.DeliveryMode.Persistent
        )
    )


def save_locations_file(file, user_id):
    """
    Saves the uploaded locations file and returns its path.
    """
    if file:
        filename = secure_filename(file.filename)
        unique_folder = str(uuid.uuid4())  # Generate a unique identifier
        folder_path = os.path.join(UPLOAD_FOLDER, str(user_id), unique_folder)
        os.makedirs(folder_path, exist_ok=True)  # Create the unique folder
        file_path = os.path.join(folder_path, filename)
        file.save(file_path)
        return file_path
    else:
        return None

@app.route('/create-submission', methods=['POST'])
@jwt_required()
def create_submission():
    """
    Creates a submission based on the user submitted data.
    """

    data = request.form.to_dict()
    locations_file = request.files.get('locations')
    user_id = get_jwt_identity()['user_id']
    
    if not user_id:
        return jsonify({"error": "Invalid user identity"}), 401
    
    try:
        num_vehicles = int(data['numVehicles'])
        depot = int(data['depot'])
        max_distance = float(data['maxDistance'])
        
        if num_vehicles <= 0:
            return jsonify({"error": "Number of vehicles must be greater than 0"}), 400
        if depot < 0:
            return jsonify({"error": "Depot must be non-negative"}), 400
        if max_distance < 0:
            return jsonify({"error": "Maximum distance must be non-negative"}), 400
    
    except ValueError as e:
        return jsonify({"error": f"Invalid input data: {e}"}), 400

    try:
        saved_file_path = save_locations_file(locations_file, user_id)
    except Exception as e:
        return jsonify({"error": f"Failed to save locations file: {e}"}), 400

    # validate the json ...
    is_valid, message = validate_json(saved_file_path)
    if not is_valid:
        return jsonify({"error": message}), 400
    
    submission = Submission(
        name=data['name'],
        status=INITIAL_SUBMISSION_STATUS,
        user_id=user_id,
        result=None,
        num_vehicles=num_vehicles,
        depot=depot,
        max_distance=max_distance,
        locations_file=saved_file_path,
    )
    
    
    try:
        db.session.add(submission)
        db.session.flush()
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Failed to create submission: {e}"}), 500
    return jsonify({"message": "Submission created successfully", "submission_id": submission.id}), 201


@app.route('/my-submissions', methods=['GET'])
@jwt_required()
def get_submissions():

    """
    Returns user's submissions. Data is paginated.
    """

    user_id = get_jwt_identity()['user_id']
    page = request.args.get('page', 1, type=int)
    if page <= 0:
        return jsonify({"error": "Page and per_page must be positive integers"}), 400
    total_submissions = Submission.query.filter_by(user_id=user_id).count()
    total_pages = (total_submissions + SUBMISSIONS_PER_PAGE - 1) // SUBMISSIONS_PER_PAGE  # Ceiling division

    # submissions = Submission.query.filter_by(user_id=user_id).order_by(desc(Submission.created_on)).all()
    query = Submission.query.filter_by(user_id=user_id).order_by(desc(Submission.created_on))
    pagination = query.paginate(page=page, per_page=SUBMISSIONS_PER_PAGE, error_out=False)
    submissions = pagination.items
    # Serialize the submissions into a list of dictionaries
    submissions_list = [{
        'id': submission.id,
        'name': submission.name,
        'created_on': submission.created_on.isoformat(),
        'status': submission.status.name,
        'locations_file': submission.locations_file,
        'num_vehicles': submission.num_vehicles,
        'depot': submission.depot,
        'max_distance': submission.max_distance,
        'result': submission.result
    } for submission in submissions]
    
    return jsonify({"submissions": submissions_list, "total_pages": total_pages}), 200


@app.route('/delete-submission/<int:submission_id>', methods=['DELETE'])
@jwt_required()
def delete_submission(submission_id):
    """
    Deletes submission data.
    """

    user_id = get_jwt_identity()['user_id']
    submission = Submission.query.filter_by(id=submission_id, user_id=user_id).first()
    
    if not submission:
        return jsonify({'error': 'Submission not found or not authorized'}), 404
    
    if submission.status == SubmissionStatusEnum.RUNNING:
        return  jsonify({'error': 'Submission can not be deleted, it is being executed...'}), 400
    
    """" This removes only empty directories
    locations_file_path = submission.locations_file
    if locations_file_path is not None and os.path.exists(locations_file_path):
        os.rm(os.path.dirname(locations_file_path))
    """
    if os.path.exists(os.path.dirname(submission.result)):
        shutil.rmtree(os.path.dirname(submission.result))
    if os.path.exists(os.path.dirname(submission.locations_file)):
        shutil.rmtree(os.path.dirname(submission.locations_file))
        
    try:
        db.session.delete(submission)
        db.session.commit()
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': 'An error occurred while trying to delete the submission'}), 500
    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred'}), 500
    return jsonify({'message': 'Submission deleted successfully'}), 200
    
@app.route('/run-submission', methods=['POST'])
@jwt_required()
def run_submission():
    """
    Places user's submission for execution
    """

    user_id = get_jwt_identity()['user_id']
    submission_id = None
    try:
        data = request.get_json()
        data_validated = RunSubmissionRequest(**data)
        submission_id = data_validated.submission_id
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    submission = Submission.query.filter_by(id=submission_id, user_id=user_id).first()
    if submission is None:
        return jsonify({"message": "Submission not found or access denied"}), 404
    if submission.status == SubmissionStatusEnum.RUNNING:
        return jsonify({"message": "Submission is already running. Please wait for it to finish."}), 400
    
    # check here json format 
    is_valid, message = validate_json(submission.locations_file)
    if not is_valid:
        return jsonify({"message": {message}}), 400    
            
# Place the submission into the queue for running
    submission_json = {
        "submission_id": submission.id,
        "name": submission.name,
        "user_id": submission.user_id,
        "num_vehicles": submission.num_vehicles,
        "depot":  submission.depot,
        "max_distance": submission.max_distance,
        "locations_file": submission.locations_file,
    }
    submission.status = SubmissionStatusEnum.RUNNING        
    send_to_queue(json.dumps(submission_json))
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Failed to update submission status"}), 500
    
    return jsonify({"message": "Submission placed on the queue for execution."}), 200    


def convert_scatter_to_line(scatter_data):
    if not scatter_data:
        return None
    
    # Ensure the input data is a list of lists
    if not all(isinstance(i, list) and len(i) == 2 for i in scatter_data):
        return None
    
    # Convert the input data to a NumPy array
    scatter_data = np.array(scatter_data, dtype=float)
    
    # Convert x-values to integers
    x_values = scatter_data[:, 0].astype(int)
    y_values = scatter_data[:, 1]
    
    # Find unique x-values and their corresponding indices
    unique_x, inverse_indices = np.unique(x_values, return_inverse=True)
    
    # Calculate the sum and count of y-values for each unique x-value
    sum_y = np.bincount(inverse_indices, weights=y_values)
    count_y = np.bincount(inverse_indices)
    
    # Calculate the average y-values
    average_y = sum_y / count_y
    
    # Combine unique x-values with their corresponding average y-values
    line_data = np.column_stack((unique_x, average_y))
    
    return line_data.tolist()

@app.route('/stats', methods=['GET'])
@jwt_required()
def get_submission_stats():
    """
    Returns user's statistics.
    """
    user_id = get_jwt_identity()['user_id']

    query = text('''
    SELECT 
        (SELECT ROUND(AVG(execution_time)::numeric, 8) FROM submission 
         WHERE user_id = :user_id AND status = 'READY' AND execution_time IS NOT NULL) AS avg_execution_time,
        (SELECT ROUND(SUM(execution_time)::numeric, 8) FROM submission 
         WHERE user_id = :user_id AND status = 'READY' AND execution_time IS NOT NULL) AS total_execution_time,
        (SELECT array_agg(ARRAY[ROUND(execution_time::numeric, 10) * 100000, num_vehicles])
         FROM submission 
         WHERE user_id = :user_id AND status = 'READY' AND execution_time IS NOT NULL) AS num_vehicles_execution_times,
        (SELECT array_agg(ARRAY[ROUND(execution_time::numeric, 10) * 100000, max_distance])
         FROM submission 
         WHERE user_id = :user_id AND status = 'READY' AND execution_time IS NOT NULL) AS max_distance_execution_times,
        (SELECT COUNT(*) FROM submission WHERE user_id = :user_id) AS total_submissions,
        (SELECT COUNT(*) FROM submission WHERE user_id = :user_id AND status = 'READY') AS ready_submissions,
        (SELECT COUNT(*) FROM submission WHERE user_id = :user_id AND status = 'FAILED') AS failed_submissions,
        (SELECT COUNT(*) FROM submission WHERE user_id = :user_id AND status = 'IDLE') AS idle_submissions,
        (SELECT COUNT(*) FROM submission WHERE user_id = :user_id AND status = 'RUNNING') AS running_submissions
''')
    result = db.session.execute(query, {'user_id': user_id}).fetchone()

    response = {
        'avg_execution_time': result[0],
        'total_execution_time': result[1],
        'num_vehicles_execution_times': convert_scatter_to_line(result[2]),
        'max_distance_execution_times': convert_scatter_to_line(result[3]),
        'total_submissions': result[4],
        'ready_submissions': result[5],
        'failed_submissions': result[6],
        'idle_submissions': result[7],
        'running_submissions': result[8]
    }
    
    return jsonify(response), 200