import gevent.monkey
gevent.monkey.patch_all()

import pika 
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, decode_token
from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit, join_room
import os
from flask_cors import CORS 


app = Flask(__name__)
app.config.from_object("notifier.config.Config")
JWTManager(app)
CORS(app, resources={r'/*': {'origins': '*'}}, 
    expose_headers='Authorization', supports_credentials=True)

socketio = SocketIO(app, message_queue='amqp://root:root@rabbitmq:5672//', async_mode='gevent', cors_allowed_origins="*")

rabbitmq_user = os.getenv('RABBITMQ_USER', 'root')
rabbitmq_pass = os.getenv('RABBITMQ_PASS', 'root')
credentials = pika.PlainCredentials(rabbitmq_user, rabbitmq_pass)
connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq', credentials=credentials, heartbeat=0))
#channel = connection.channel()

def callback(ch, method, properties, body):
    with app.app_context():
        message = body.decode()
        user_id = properties.headers.get('user_id')
        
        if user_id:
            socketio.emit('notification', {'message': message}, room=user_id)
            print(f"Sent notification to user {user_id}: {message}")

        ch.basic_ack(delivery_tag=method.delivery_tag)
                                

def pub_notification(user_id, message):
    channel = connection.channel()
    try:
        channel.basic_publish(
            exchange='',
            routing_key = 'notifications_queue',
            body = message,
            properties=pika.BasicProperties(
                headers={'user_id': user_id}
            )
        )
    except Exception as e:
        print(f"Notification: {message} failed to place on queue")
    
def start_consuming_notifications():
    channel = connection.channel()
    channel.queue_declare(queue='notifications_queue', durable=True)
    channel.basic_consume(queue='notifications_queue', on_message_callback=callback, auto_ack=False)
    
    print('Started consuming notifications...')
    try:
        channel.start_consuming()
    except Exception as e:
        print(f"Error while consuming: {e}")


@app.route('/my-notifications', methods=['GET'])
@jwt_required()
def get_notifications():
    user_id = get_jwt_identity()
    notifications = []

    return jsonify({"notifications": notifications}), 200


@socketio.on('join')
def handle_join(data):
    token = data.get('token')
    if token:
        user_id = decode_token(token).get('sub').get('user_id')
        username = decode_token(token).get('sub').get('username')
        if user_id:
            join_room(user_id)
            #emit('notification', {"message": f"Welcome back {username}"}, room=user_id)
            message = f"Welcome back {username}!"
            pub_notification(user_id, message)
            #print(f'User {user_id} joined the room')
            #socketio.start_background_task(target=start_consuming_notifications)
    else:
        print("Error joining room")


@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

with app.app_context():
    socketio.start_background_task(target=start_consuming_notifications)