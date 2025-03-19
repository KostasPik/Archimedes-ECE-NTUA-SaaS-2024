import pika
import json
from problem import app, db
from problem.models import Submission, SubmissionStatusEnum
from problem.validator import download_output
from sqlalchemy.exc import SQLAlchemyError
from flask import jsonify
import os


def connect_to_rabbitmq():
    while True:
        try:
            rabbitmq_user = os.getenv('RABBITMQ_USER', 'root')
            rabbitmq_pass = os.getenv('RABBITMQ_PASS', 'root')
            credentials = pika.PlainCredentials(rabbitmq_user, rabbitmq_pass)
            connection = pika.BlockingConnection(
                pika.ConnectionParameters(host='rabbitmq', heartbeat=0, credentials=credentials)
            )
            return connection
        except pika.exceptions.AMQPConnectionError:
            print(f"failed to connect to RabbitMQ...")

notifier_connection = connect_to_rabbitmq()
notifier_channel = notifier_connection.channel()
notifier_channel.queue_declare(queue ='notifications_queue', durable=True)

def pub_notification(user_id, message):
    channel = notifier_channel
    try:
        channel.basic_publish(
            exchange='',
            routing_key = 'notifications_queue',
            body = message,
            properties=pika.BasicProperties(
                headers={'user_id': user_id}
            )
        )
        print(f"Notification: {message} for user {user_id} was placed on queue successfully")
    except Exception as e:
        print(f"Notification: {message} failed to place on queue")
        
        
def callback(ch, method, properties, body):
    data = json.loads(body)
    submission_id = data['submission_id']
    results = data['results']
    new_status = data['status']
    execution_time = data['execution_time']

    with app.app_context():  # Set the Flask application context
        submission = Submission.query.filter_by(id=submission_id).first()
        if submission is None:
            print(f"No submission found with id {submission_id}")
            return
        
        try:
            # Download the results and save them
            outfile = download_output(results, submission.user_id, submission.name, submission.locations_file)
            submission.status = new_status
            submission.result = outfile
            submission.execution_time = execution_time
            db.session.commit()
            print(f"Successfully updated submission {submission_id}")
            
            #send another message when results are ready
            message = f"Your submission with name '{submission.name}' is ready. Check results!"
            pub_notification(submission.user_id, message)
        
        except SQLAlchemyError as e:
            db.session.rollback()
            print(f"Failed to update submission {submission_id}: {e}")
        except Exception as e:
            print(f"Failed to process submission {submission_id}: {e}")

def start_result_receiver():
    result_connection = connect_to_rabbitmq()   
    result_channel = result_connection.channel()          
    result_channel.queue_declare(queue='result_queue', durable=True)
    result_channel.basic_consume(queue='result_queue', on_message_callback=callback, auto_ack=True)

    print("Waiting for results. To exit press CTRL+C")
    result_channel.start_consuming()


if __name__ == "__main__":
    with app.app_context():  # Make sure the app context is available for SQLAlchemy
        start_result_receiver()