# Solver Service

The Solver Service is a Python application designed for executing complex computational tasks using a Vehicle Routing Problem (VRP) solver. It operates within a distributed architecture leveraging RabbitMQ as a message broker, enabling efficient task management and result processing.

## Key Features
1. **Multiple Workers**:
	- Solver Service supports multiple workers for solving user submissions.
2.  **RabbitMQ Connection**:    
    -   Three separate connections are established for different queues: `task_queue` for receiving tasks, `result_queue` for sending results, and `notifications_queue` for sending user notifications.
3.  **Execution of the Solver**:
    -   The script includes error handling for both failed executions and timeouts. If the solver fails to execute, it captures the error and logs it.
4.  **Result Handling**: 
    -   After execution, the script constructs a JSON object containing the submission ID, execution status (READY or FAILED), results from the solver, and execution time.
    -   This result is published to the `result_queue` to be processed by another component of the system.
8.  **Acknowledgment and Cleanup**:
    -   The worker sends an acknowledgment to RabbitMQ once the results are published, indicating that the task has been completed.
    -   The script cleans up by deleting any temporary files created during the execution to save disk space.