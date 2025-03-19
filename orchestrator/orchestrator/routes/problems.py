from flask import Blueprint, request, jsonify
import requests
from flask_jwt_extended import jwt_required
from .credits import CREDITS_SERVICE

problems_bp = Blueprint('problems', __name__)

PROBLEM_SERVICE = "http://problem_rp:6001"


@problems_bp.route("/create-submission", methods=['POST'])
@jwt_required()
def create_submission():
    """
    Creates a submission with status IDLE (ready to be executed)
    """

    CREATE_SUBMISSION_SUFFIX = '/create-submission'
    data = request.form
    files = {key: (file.filename, file.read(), file.mimetype) for key, file in request.files.items()}


    auth_header = request.headers.get('Authorization')
    headers={'Authorization': auth_header if auth_header else '' }
    response = requests.post(PROBLEM_SERVICE + CREATE_SUBMISSION_SUFFIX, data=data, files=files, headers=headers)
    status_code = response.status_code
    print(response)
    return jsonify(response.json()), status_code


@problems_bp.route("/my-submissions", methods=['GET'])
@jwt_required()
def my_submissions():
    """
    Fetches user's submissions
    """

    page = request.args.get('page', 1, type=int)
    
    MY_SUBMISSIONS_SUFFIX = '/my-submissions'+"?page="+str(page)

    auth_header = request.headers.get('Authorization')
    headers={'Authorization': auth_header if auth_header else '' }
    response = requests.get(PROBLEM_SERVICE + MY_SUBMISSIONS_SUFFIX, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code

@problems_bp.route("/run-submission", methods=['POST'])
@jwt_required()
def run_submission():
    """
    Places submission on queue for execution if user has enought credits.
    """
    RUN_SUBMISSION_SUFFIX = '/run-submission'
    GET_CREDIT_SUFFIX = '/remove-credit'
    BUY_CREDIT_SUFFIX = '/buy-credits'

    auth_header = request.headers.get('Authorization')
    headers={'Authorization': auth_header if auth_header else '' }

    # Get a credit
    # If not enough credits or some other exception, problem IS NOT placed for execution
    response_cred= requests.post(CREDITS_SERVICE + GET_CREDIT_SUFFIX, headers=headers)
    if (response_cred.status_code == 400):
        return jsonify({"message": "Not enought credits"}), response_cred.status_code
    elif (response_cred.status_code != 200):
        return jsonify(response_cred.json()), response_cred.status_code
    
    # Place for execution
    data = request.json
    response = requests.post(PROBLEM_SERVICE + RUN_SUBMISSION_SUFFIX, json=data, headers=headers)
    status_code = response.status_code

    # If problem failed to be placed for execution, restore user's credit
    if (status_code != 200):
        rollback_cred_response = requests.post(CREDITS_SERVICE + BUY_CREDIT_SUFFIX, json={'newCredits': 1}, headers=headers)

    return jsonify(response.json()), status_code


@problems_bp.route("/delete-submission/<int:submission_id>", methods=['DELETE'])
@jwt_required()
def delete_submission(submission_id):
    """
    Delete submission (database data + results file)
    """

    DELETE_SUBMISSION_SUFFIX = f'/delete-submission/{submission_id}'
    auth_header = request.headers.get('Authorization')
    headers={'Authorization': auth_header if auth_header else '' }
    response = requests.delete(PROBLEM_SERVICE + DELETE_SUBMISSION_SUFFIX, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code

@problems_bp.route("/stats", methods=['GET'])
@jwt_required()
def my_statistics():
    """
    Fetches users statistics
    """

    STATISTICS_SUFFIX = '/stats'
    auth_header = request.headers.get('Authorization')
    headers={'Authorization': auth_header if auth_header else '' }
    response = requests.get(PROBLEM_SERVICE + STATISTICS_SUFFIX, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code