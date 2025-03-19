from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from .models import db, Credits
from .schemas import NewCredits
from functools import wraps
from sqlalchemy import text, exc



app = Flask(__name__)
app.config.from_object("credits.config.Config")
JWTManager(app)
db.init_app(app)

INITIAL_CREDITS = 3 * 1000


def create_credits_if_not_present(f):
    """
    Checks if credit row for specific user_id is available.
    If not, creates one with INITIAL_CREDITS credits.
    """
    @wraps(f)
    @jwt_required()
    def create_credits(*args, **kwargs):
        current_user = get_jwt_identity()
        user_id = current_user['user_id']

        # check if credits row exists
        user_credits = Credits.query.filter_by(user_id=user_id).first()
        try:
            if not user_credits:
                new_credits = Credits(user_id=user_id, user_credits=INITIAL_CREDITS)
                db.session.add(new_credits)
                db.session.commit()
            return f(current_user, *args, **kwargs)
        except Exception as e:
            db.session.rollback()
            return f(current_user, *args, **kwargs)
            # return jsonify({"error": True, "msg": str(e)}), 500
    return create_credits


@app.route("/get-credits", methods=['GET'])
@create_credits_if_not_present
def get(current_user):
    """
    Returns credits of specific user_id.
    """

    user_id = current_user['user_id']
    total_credits = Credits.query.filter_by(user_id=user_id).first().user_credits
    message = {
        'credits': total_credits
    }
    return jsonify(message)


@app.route("/buy-credits", methods=['POST'])
@create_credits_if_not_present
def buy(current_user):
    """
    User buys credits.
    """
    data = request.json
    json_data = NewCredits(**data)
    amount = int(json_data.newCredits)
    user_id = current_user['user_id']
    try:
        db.session.execute(
            text("UPDATE credits SET user_credits = user_credits + :amount WHERE user_id = :user_id"),
            {"amount": amount, "user_id": user_id}
        )
        db.session.commit()
        return jsonify({"error": False, "msg": "Successfully bought credits."}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": True, "msg": str(e)}), 500
    finally:
        db.session.close()
        
#changed the route name ... 
@app.route("/remove-credit", methods=['POST'])
@create_credits_if_not_present
def remove(current_user):
    """
    Removes 1 user credit.
    """
    
    user_id = current_user['user_id']
    try:
       # If Total Number of Credits < 1 the constraint is being triggered ... 
        db.session.execute(
            text("UPDATE credits SET user_credits = user_credits - :amount WHERE user_id = :user_id"),
            {"amount": 1, "user_id": user_id}
        )
        db.session.commit()
        return jsonify({"error": False, "msg": "Successfully removed credit."}), 200
    except exc.IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": True, "msg": "Zero credits"+str(e)}), 400
    except Exception as e:
        return jsonify({"error": True, "msg": str(e)}), 500
    finally:
        db.session.close()