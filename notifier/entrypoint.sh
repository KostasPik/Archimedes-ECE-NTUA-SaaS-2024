#!/bin/sh

echo "Waiting for RabbitMQ..."
while ! nc -z $RABBITMQ_HOST $RABBITMQ_PORT; do
    sleep 0.1
done
echo "RabbitMQ started"

exec "$@"