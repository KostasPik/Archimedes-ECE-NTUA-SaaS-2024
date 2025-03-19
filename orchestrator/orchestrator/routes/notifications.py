from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
import requests


notifications_bp = Blueprint('notifications', __name__)

NOTIFICATIONS_SERVICE = 'http://notifications:9000'

@notifications_bp.route("/my-notifications", methods=['GET'])
@jwt_required()
def get_notifications():
    GET_NOTIFIED_SUFFIX = '/my-notifications'
    auth_header = request.headers.get('Authorization')
    headers = {'Authorization': auth_header} if auth_header else {}
    response = requests.get(NOTIFICATIONS_SERVICE+GET_NOTIFIED_SUFFIX, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code
