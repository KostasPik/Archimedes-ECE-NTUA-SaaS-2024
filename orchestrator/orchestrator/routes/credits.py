from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
import requests


credits_bp = Blueprint('credits', __name__)

CREDITS_SERVICE = 'http://credits:7007'


@credits_bp.route("/get-credits", methods=['GET'])
@jwt_required()
def get_credits():
    """
    if successfull, returns amount of credits
    """

    GET_CREDITS_SUFFIX = '/get-credits'
    auth_header = request.headers.get('Authorization')
    headers = {'Authorization': auth_header} if auth_header else {}
    response = requests.get(CREDITS_SERVICE+GET_CREDITS_SUFFIX, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code


@credits_bp.route("/buy-credits", methods=['POST'])
@jwt_required()
def buy_credits():
    """
    Buys credits.
    """
    BUY_CREDITS_SUFFIX = '/buy-credits'
    auth_header = request.headers.get('Authorization')
    headers = {'Authorization': auth_header} if auth_header else {}
    payload = request.json
    response = requests.post(CREDITS_SERVICE+BUY_CREDITS_SUFFIX, json=payload, headers=headers)
    status_code = response.status_code
    return jsonify(response.json()), status_code