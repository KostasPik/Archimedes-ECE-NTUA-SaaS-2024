# Submissions Service
The **Submissions Service** is responsible for managing user submissions within the application. It allows users to create, edit, run, retrieve, and delete submissions related to their tasks. Each submission contains essential information such as the user ID, the associated locations file, and various parameters like the number of vehicles, depot location, and maximum distance. The service utilizes a RabbitMQ queue to handle execution requests asynchronously, enabling efficient processing of submissions without blocking user interactions. It also uses the RabbitMQ queue to receive the results produces by the `Solver Service`.

The service supports JWT authentication to ensure secure access, allowing users to perform operations related to their submissions only. Data validation is performed for submission parameters and uploaded files, ensuring that inputs meet the expected criteria before processing.

## API Endpoints

1.  **Create Submission**
    
    -   **Endpoint**: `/create-submission`
    -   **Method**: `POST`
    -   **Description**: Creates a new submission with the provided data and uploaded locations file.
    -   **Request Body**: Form data including `name`, `numVehicles`, `depot`, `maxDistance`, and a file for `locations`.
    -   **Response**: JSON object with submission ID on success, or an error message.
2.  **Get My Submissions**
    
    -   **Endpoint**: `/my-submissions`
    -   **Method**: `GET`
    -   **Description**: Retrieves a paginated list of the user's submissions.
    -   **Query Parameters**: `page` (optional, default is 1).
    -   **Response**: JSON object containing submissions list and total pages.
3.  **Delete Submission**
    
    -   **Endpoint**: `/delete-submission/<int:submission_id>`
    -   **Method**: `DELETE`
    -   **Description**: Deletes a specific submission based on the submission ID.
    -   **Response**: JSON object confirming deletion or an error message.
4.  **Run Submission**
    
    -   **Endpoint**: `/run-submission`
    -   **Method**: `POST`
    -   **Description**: Places the user's submission into the execution queue.
    -   **Request Body**: JSON containing `submission_id`.
    -   **Response**: JSON object confirming placement in the queue or an error message.

## Additional Notes
-   Each submission has an initial status of "IDLE" and can be updated as it progresses through different stages (e.g., "RUNNING").
-   The service includes validation functions for both the JSON input and the uploaded file, ensuring data integrity before further processing.