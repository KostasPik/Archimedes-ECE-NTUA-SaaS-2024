# Use an official Node runtime as a parent image
FROM node:22-alpine3.18 AS builder
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install 
# RUN npm install @mui/material @emotion/react @emotion/styled

# RUN npm install socket.io-client
# Copy the rest of the application code to the container
COPY . .
# Build the React app
RUN npm run build

# Nginx config
FROM nginx:stable-alpine3.17-slim

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80