import os
from datetime import timedelta

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite://")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_TOKEN_LOCATION = ['headers']
    JWT_HEADER_NAME = 'Authorization'
    JWT_SECRET_KEY = 'super-secret-key'
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=10)

