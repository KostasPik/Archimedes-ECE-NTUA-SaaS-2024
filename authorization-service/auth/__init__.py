from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt
from sqlalchemy.exc import IntegrityError  # Import the IntegrityError
from .schemas import UserLogin, UserRegistration
from .models import db, User



app = Flask(__name__)
app.config.from_object("auth.config.Config")
JWTManager(app)
db.init_app(app)


@app.route("/login", methods=['POST'])
def login():
    """
    Logs user in the app. Returns access token.
    """

    data = request.json
    ret = {"error": False}
    try:
        user_login = UserLogin(**data)
        username = user_login.username
        password = user_login.password

        user = User.query.filter_by(username=username).first()
        if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            identity = {
                'user_id': user.id,
                'username': user.username,
                'first_name': user.first_name,
                'last_name': user.last_name
            }
            access_token = create_access_token(identity=identity)
            ret['data'] = {'token': access_token}
            return jsonify(ret), 200
        ret['error'] = True
        ret['msg'] = "Invalid Credentials."
        return jsonify(ret), 401
    except Exception as e:
        ret['error'] = True 
        ret['msg'] = "An error occured."
        print(str(e))
    return jsonify(ret), 500


@app.route("/register", methods=["POST"])
def register():
    """
    Registers user in the app.
    """

    data = request.json
    ret = {"error": False}
    try:
        user_registration = UserRegistration(**data)
        
        # pre-processing request data
        user_registration.first_name = user_registration.first_name.capitalize()
        user_registration.last_name = user_registration.last_name.capitalize()

        # password hashing
        password = user_registration.password.encode('utf-8')
        salt = bcrypt.gensalt(12)
        hashed_password = bcrypt.hashpw(password, salt).decode('utf-8')


        new_user = User(
            username=user_registration.username,
            password=hashed_password,
            first_name=user_registration.first_name,
            last_name=user_registration.last_name
        )
        db.session.add(new_user)
        db.session.commit()
        ret['msg'] = "Registration complete."
    except IntegrityError:
        # Handle the IntegrityError if a duplicate username exists
        db.session.rollback()  # Rollback the session to clean up the failed commit
        ret['msg'] = "Username already exists!"
        return jsonify(ret), 400
    except Exception as e:
        ret['error'] = True
        ret['msg'] = "Registration Failed."
        return jsonify(ret), 400
    return jsonify(ret), 201