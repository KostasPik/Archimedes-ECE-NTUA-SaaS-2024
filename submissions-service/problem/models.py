from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum
import enum
from datetime import datetime
# import pytz

db = SQLAlchemy()

class SubmissionStatusEnum(enum.Enum):
    IDLE = 'IDLE'
    RUNNING = 'RUNNING'
    READY = 'READY'
    FAILED = 'FAILED'


class Submission(db.Model):
    __tablename__ = "submission"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    status = db.Column(Enum(SubmissionStatusEnum), default=SubmissionStatusEnum.IDLE, nullable=False)
    locations_file = db.Column(db.String, nullable=False)
    num_vehicles = db.Column(db.Integer, nullable=False)
    depot = db.Column(db.Integer, nullable=False)
    max_distance = db.Column(db.Integer, nullable=False)
    result = db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, nullable=False)
    execution_time = db.Column(db.Float, nullable=True)