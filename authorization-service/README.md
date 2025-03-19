# Authorization Service

The **Authorization Service** is responsible for managing user authentication and authorization within the microservices architecture. It connects to a PostgreSQL database to store and retrieve user data.

## API Endpoints
1. User Registration 
	- **Endpoint**: `/register` 
	- **Method**: `POST` 
	- **Description**: Registers a new user in the application.  
2. User Login 
	- **Endpoint**: `/login` 
	- **Method**: `POST` 
	- **Description**: Logs in an existing user and returns a JWT access token.