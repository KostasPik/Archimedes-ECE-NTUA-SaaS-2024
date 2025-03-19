from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import CheckConstraint

db = SQLAlchemy()

class Credits(db.Model):
    __tablename__ = "credits"

    user_id = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    user_credits = db.Column(db.Integer, nullable=False)

    # Add a Check Constraint to ensure user_credits is positive or zero
    __table_args__ = (
        CheckConstraint('user_credits >= 0', name='check_positive_credits'),
    )