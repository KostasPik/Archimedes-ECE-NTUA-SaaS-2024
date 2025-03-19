import os

class Config(object):
    JWT_TOKEN_LOCATION = ['headers']
    JWT_HEADER_NAME = 'Authorization'
    JWT_SECRET_KEY = 'super-secret-key'
