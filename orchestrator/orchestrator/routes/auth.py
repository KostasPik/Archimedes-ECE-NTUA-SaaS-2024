from flask import Blueprint, request, jsonify
import requests

auth_bp = Blueprint('auth', __name__)

AUTH_SERVICE = "http://authorization:5000"

@auth_bp.route("/login", methods=['POST'])
def login():
    """
    If successful, returns access token.
    """
    
    LOGIN_SUFFIX = '/login'
    data = request.json
    response = requests.post(AUTH_SERVICE+LOGIN_SUFFIX, json=data)
    status_code = response.status_code
    return jsonify(response.json()), status_code

@auth_bp.route("/register", methods=['POST'])
def register():
    """
    If successful, creates the user.
    """

    REGISTER_SUFFIX = '/register'
    data = request.json
    response = requests.post(AUTH_SERVICE+REGISTER_SUFFIX, json=data)
    status_code = response.status_code
    return jsonify(response.json()), status_code