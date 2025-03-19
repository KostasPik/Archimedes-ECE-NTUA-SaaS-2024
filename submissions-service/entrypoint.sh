#!/bin/sh


echo "Waiting for postgres..."
while ! nc -z $SQL_HOST $SQL_PORT; do
    sleep 0.1
done
echo "PostgreSQL started"

echo "Waiting for RabbitMQ..."
while ! nc -z $RABBITMQ_HOST $RABBITMQ_PORT; do
    sleep 0.1
done
echo "RabbitMQ started"

python manage.py create_db
export PYTHONPATH=$(pwd)

# python -m problem.result_receiver
python problem/result_receiver.py &  # Run it in the background

exec "$@"