# Archimedes NTUA ECE 2024 SaaS Project

## Overview
**Archimedes** is an online platform designed to provide problem solving capabilities for users. The application is structured as a set of microservices, where each service is responsible for a specific task. These services communicate with each other via well-defined APIs, typically using HTTP or messaging queues. Docker containers are used to encapsulate each service, ensuring they run consistently across different environments.

## Installation
1. Clone the repository
    ````bash
    git clone https://github.com/ntua/saas2024-31
    cd saas2024-31
    ````
2. Ensure you have the following installed: 
	- [Docker](https://www.docker.com/get-started) 
	- [Docker Compose](https://docs.docker.com/compose/install/) (if applicable)
3.	 Build the image and run the services
		```bash
		docker-compose up -d --build
		```
Now you should be able to access the web application through [localhost](http://127.0.0.1/).

## Microservices
 1. **Orchestrator** 
	- **Description**: Acts as the central service responsible for managing communication between the different microservices. 
 2. **Frontend** 
	 - **Description**: The user interface of the application, served via an HTTP server.  		
 3. **Authorization Service** 
	 - **Description**: Handles user authentication.
4. **AuthorizationDB** 
	- **Description**: PostgreSQL database for storing user authentication data. 
5. **Credits Service**
	- **Description**: Manages user credits and related operations.
6. **CreditsDB** 
	- **Description**: PostgreSQL database for storing credits-related data.
7. **Submissions Service** 
	- **Description**: Handles submission of problems to be solved and results.
8. **SubmissionsDB** 
	- **Description**: PostgreSQL database for storing problem submissions.
9. **RabbitMQ** 
	 - **Description**: Message broker for managing communication between services using message queues.
10. **Solver Service** 
	- **Description**: Responsible for solving the problems submitted through the `submissions` service. 
11. **Notifier** 
	- **Description**: Notifies users about the completion of tasks or changes in state. 
	 
## Contributors
- **Stefanos Yiannakopoulos**
- **Konstantinos Pikoulas** 
-  **Maria Lazou**