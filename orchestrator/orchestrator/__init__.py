from flask import Flask, g
from flask_cors import CORS
from flask_jwt_extended import create_access_token, JWTManager, decode_token


# Make seperate endpoint paths for each microservice
def register_blueprints(app):
    from orchestrator.routes.auth import auth_bp
    from orchestrator.routes.credits import credits_bp
    from orchestrator.routes.problems import problems_bp
    from orchestrator.routes.notifications import notifications_bp

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(credits_bp, url_prefix='/credits')
    app.register_blueprint(problems_bp, url_prefix='/problem')
    app.register_blueprint(notifications_bp, url_prefix='/notifications')


def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_object("orchestrator.config.Config")
    CORS(app, resources={r'/*': {'origins': '*'}}, 
     expose_headers='Authorization', supports_credentials=True)
    JWTManager(app)

    register_blueprints(app)

    return app