#!/bin/sh


echo "Waiting for RabbitMQ..."

while ! nc -z $RABBITMQ_HOST $RABBITMQ_PORT; do
    sleep 0.1
done

echo "RabbitMQ started"

AVAILABLE_CORES=$(nproc)
NUM_CORES=$(( (AVAILABLE_CORES / 2) - 1 ))

if [ "$NUM_CORES" -le 0 ]; then
    NUM_CORES=1
fi
# ensure number of workers is at least 1

echo "Spawning $NUM_CORES worker processes..."

for i in $(seq 1 $NUM_CORES); do
    python3 worker.py $i &
    echo "Worker $i spawned"
done

wait

exec "$@"