# Orchestrator Service
The **Orchestrator Service** acts as a central controller that coordinates various microservices in a distributed system. It provides a unified API gateway to route requests to the appropriate services, making it easier for clients to interact with the system through a single entry point.

## Summary of Microservice Communication:
-   **Authentication (`/auth`)**: Handles user login and token generation.
-   **Credits (`/credits`)**: Manages user credit balance and transactions.
-   **Submissions (`/problem`)**: Handles user submission/result management.
-   **Notifications (`/notifications`)**: Manages user notifications.