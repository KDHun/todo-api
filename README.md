# To-Do List Application

This To-Do List application allows users to manage their tasks efficiently. Users can create tasks, mark them as completed, edit task details, and delete tasks. The application uses a simple database like MongoDB for data persistence and includes validation to ensure task titles are not empty and users can't mark a task as complete if it's already marked as such. This README.md file provides instructions on how to use the application and explains the code structure and key decisions made during development.

## Table of Contents
- [Instructions](#instructions)
- [Code Structure](#code-structure)
- [Task Table Structure](#task-table-structure)
- [Routes and Methods](#routes-and-methods)
- [Bonus Features](#bonus-features)

## Instructions

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the project directory and set the `DATABASE_URL` variable to your MongoDB connection string.
4. Start the server by running `npm start`.
5. You can now use the following routes to manage your tasks:

## Code Structure

The application consists of three main files:

- `index.js`: This is the main entry point of the application. It sets up the Express server, connects to the MongoDB database, and defines routes for managing tasks.

- `task.js`: This file defines the structure of the task model using Mongoose. It specifies the fields for each task, such as title, description, isCompleted, dueDate, and priority.

- `taskRoute.js`: This file contains the Express router for handling task-related HTTP requests. It defines routes for creating, retrieving, updating, and deleting tasks.

## Task Table Structure

The `task` collection in the MongoDB database follows this structure:

- `title` (String, required): The title of the task.
- `description` (String): A description of the task.
- `isCompleted` (Boolean, required): Indicates whether the task is completed or not.
- `dueDate` (Date): The due date for the task (optional).
- `priority` (String): The priority level of the task (optional).

## Routes and Methods

### Create a Task
- **Route**: `/task` (POST)
- **Description**: Create a new task.
- **Request Body**: JSON object with task details (title, description, isCompleted, dueDate, priority).
- **Example Request**:
  ```json
  {
    "title": "Finish Project",
    "description": "Complete the To-Do List application project.",
    "isCompleted": false,
    "dueDate": "2023-09-30T00:00:00.000Z",
    "priority": "High"
  }
  ```
- **Example Response**:
  ```json
  {
    "_id": "5f7db6a9e5a0a542f81b3b7c",
    "title": "Finish Project",
    "description": "Complete the To-Do List application project.",
    "isCompleted": false,
    "dueDate": "2023-09-30T00:00:00.000Z",
    "priority": "High"
  }
  ```

### Get All Tasks
- **Route**: `/alltask` (GET)
- **Description**: Retrieve a list of all tasks.
- **Example Response**:
  ```json
  [
    {
      "_id": "5f7db6a9e5a0a542f81b3b7c",
      "title": "Finish Project",
      "description": "Complete the To-Do List application project.",
      "isCompleted": false,
      "dueDate": "2023-09-30T00:00:00.000Z",
      "priority": "High"
    },
    // Additional tasks...
  ]
  ```

### Get Task by ID
- **Route**: `/task/:id` (GET)
- **Description**: Retrieve a specific task by its ID.
- **Example Response**:
  ```json
  {
    "_id": "5f7db6a9e5a0a542f81b3b7c",
    "title": "Finish Project",
    "description": "Complete the To-Do List application project.",
    "isCompleted": false,
    "dueDate": "2023-09-30T00:00:00.000Z",
    "priority": "High"
  }
  ```

### Update Task by ID
- **Route**: `/task/:id` (PATCH)
- **Description**: Update the details of a specific task by its ID.
- **Request Body**: JSON object with updated task details.
- **Example Request**:
  ```json
  {
    "isCompleted": true
  }
  ```
- **Example Response**:
  ```json
  {
    "_id": "5f7db6a9e5a0a542f81b3b7c",
    "title": "Finish Project",
    "description": "Complete the To-Do List application project.",
    "isCompleted": true,
    "dueDate": "2023-09-30T00:00:00.000Z",
    "priority": "High"
  }
  ```

### Delete Task by ID
- **Route**: `/task/:id` (DELETE)
- **Description**: Delete a specific task by its ID.

## Bonus Features

This To-Do List application includes some bonus features:

- Due Dates: Tasks can have due dates specified in the `dueDate` field.
- Priority Levels: Tasks can have priority levels specified in the `priority` field.
