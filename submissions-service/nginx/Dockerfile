FROM openresty/openresty:alpine-fat

WORKDIR /app

COPY . .

COPY ./default.conf /etc/nginx/conf.d/default.conf
#COPY ./validate_jwt.lua /usr/local/openresty/nginx/lua/validate_jwt.lua

#COPY ./nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
#COPY ./mime.types /usr/local/openresty/nginx/conf/mime.types

RUN mkdir -p /uploads && chmod -R 777 /uploads
EXPOSE 6001