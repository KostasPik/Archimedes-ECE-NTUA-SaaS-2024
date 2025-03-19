import pika
import time
import os
import sys
from utils import save_locations_file
import json
import subprocess
import os
from werkzeug.utils import secure_filename
import shutil

worker_id = sys.argv[1]

def connect_to_rabbitmq():
    while True:
        try:
            rabbitmq_user = os.getenv('RABBITMQ_USER', 'root')
            rabbitmq_pass = os.getenv('RABBITMQ_PASS', 'root')
            credentials = pika.PlainCredentials(rabbitmq_user, rabbitmq_pass)
            connection = pika.BlockingConnection(
                pika.ConnectionParameters(host='rabbitmq', heartbeat=0, credentials=credentials)
            )
            return connection
        except pika.exceptions.AMQPConnectionError:
            print(f"Worker {worker_id}: Failed to connect to RabbitMQ. Retrying in 5 seconds...")
            time.sleep(5)

task_connection = connect_to_rabbitmq()
task_channel = task_connection.channel()
task_channel.queue_declare(queue='task_queue', durable=True)
print(f'Worker {worker_id}: [*] Waiting for messages. To exit press CTRL+C')

result_connection = connect_to_rabbitmq()
result_channel = result_connection.channel()
result_channel.queue_declare(queue='result_queue', durable=True)

notifier_connection = connect_to_rabbitmq()
notifier_channel = notifier_connection.channel()
notifier_channel.queue_declare(queue ='notifications_queue', durable=True)

def pub_notification(user_id, message):
    channel = notifier_channel
    try:
        channel.basic_publish(
            exchange='',
            routing_key = 'notifications_queue',
            body = message,
            properties=pika.BasicProperties(
                headers={'user_id': user_id}
            )
        )
        print(f"Notification: {message} for user {user_id} was placed on queue successfully")
    except Exception as e:
        print(f"Notification: {message} failed to place on queue")

# receive user submission
def callback(ch, method, properties, body):
    print(f"Worker {worker_id}: [x] Received {body.decode()}")
    json_received = json.loads(body.decode())
    net_path = json_received['locations_file']
    submission_id = json_received['submission_id']
    submission_name = json_received['name']
    user_id = json_received['user_id']
    actual_path = save_locations_file(net_path, submission_id)
    num_vehicles = str(json_received['num_vehicles'])
    depot = str(json_received['depot'])
    max_distance = str(json_received['max_distance'])

    # place user submission for execution
    cmd = ['python3', './solver/vrpSolver.py', actual_path, num_vehicles, depot, max_distance]
    
    #Send a notification when pulled from queue
    message = f"Your submission with name '{submission_name}' started execution on worker {worker_id}"
    pub_notification(user_id, message)
    
    start_time = time.process_time()
    try:
        output = subprocess.run(cmd, check=True, text=True, capture_output=True, timeout=30) # 15 seconds timeout per submission
        execution_time = time.process_time() - start_time
        new_status = "READY"
        results = output.stdout
    except subprocess.CalledProcessError as sube:
        execution_time = time.process_time() - start_time
        new_status = "FAILED"
        results = str(sube)
        print(f"Worker {worker_id}: [x] Script failed with error: {results}")
    ### If results are not producted before Timeout mark it as failed...
    except subprocess.TimeoutExpired as sube:
        execution_time = time.process_time() - start_time
        new_status = "FAILED"
        results = str(sube)
        print(f"Worker {worker_id}: [x] Script failed with error: {results}")
    
    #change status here   
    result_json = {
        "submission_id": submission_id,
        "status": new_status,
        "results": results,
        "execution_time": execution_time,
    }
    result_channel.basic_publish(
        exchange='',
        routing_key='result_queue',
        body=json.dumps(result_json),
        properties=pika.BasicProperties(
            delivery_mode=pika.DeliveryMode.Persistent
        )
    )
    print(f"Worker {worker_id}: Results sent to problem server")
    print(f"Worker {worker_id}: [x] Done")

    # send ack after results are places in queue!
    ch.basic_ack(delivery_tag=method.delivery_tag)

    #delete file after execution
    try:
        shutil.rmtree(os.path.dirname(actual_path))  # This will delete the directory and all its contents
    except OSError as e:
        print(f"Error: {e.strerror} - {e.filename}")
    

task_channel.basic_qos(prefetch_count=1)
task_channel.basic_consume(queue='task_queue', on_message_callback=callback)

task_channel.start_consuming()