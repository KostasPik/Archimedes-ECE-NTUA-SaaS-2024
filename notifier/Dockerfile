FROM python:3.11.3-slim-buster

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt
RUN pip install gunicorn 
RUN pip install whitenoise 
RUN pip install gevent gevent-websocket flask-socketio kombu


RUN apt-get update && apt-get install -y netcat
RUN apt-get update && apt-get install -y dos2unix

COPY . /usr/src/app/
RUN chmod +x /usr/src/app/entrypoint.sh
RUN dos2unix /usr/src/app/entrypoint.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*

EXPOSE 9000
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]