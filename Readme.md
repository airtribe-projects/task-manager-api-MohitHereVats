# Task Management RESTful API

A simple RESTful API built with Node.js and Express.js to manage tasks, using in-memory data storage. This project demonstrates CRUD operations, input validation, error handling, and filtering capabilities.

---

## Features

- Create new tasks
- Retrieve all tasks or filter by completion status
- Retrieve, update, or delete individual tasks
- Validate user input
- Handle errors gracefully
- In-memory data storage (data resets on server restart)

---

## Technologies Used

- Node.js
- Express.js
- Postman or cURL for testing

---

### Setup

1) Clone the repository:
git clone <your-repo-url>  

2) Navigate to project directory:
cd your-project-folder  

3) Install dependencied:
npm install  

4) Run server:
npm start

---

## Error Handling & Validation
 - Invalid task IDs return 404 with an error message.
 - Missing or invalid request body fields return 400 with validation errors.
 - Server errors are caught and returned with proper status codes.

---

## Notes
 - This project uses in-memory data, so all data will be lost when server stops.
 - Feel free to extend this project with persistent storage, user authentication, or more advanced features.

---

## Endpoints

1) 
 - Method: GET
 - Endpoint: `/tasks`
 - Description: Retrieve all tasks 
 - RequestBody: Optional query param: `?completed=true/false`
 - curl --location 'localhost:3000/tasks' 

2) 
 - Method: POST
 - Endpoint: `/tasks`
 - Description: Create a new task
 - RequestBody: `{"title" : "string", "description": "string", "completed": boolean}`
 - The Request Body above can also accept "priority" as a key parameter with value being one of ["low", "medium", "high"], if no value provided the priority will be taken as low.
 - curl --location 'localhost:3000/tasks' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false
}'


3) 
 - Method: GET
 - Endpoint: `/tasks/:id`
 - Description: Retrieve task by ID 
 - RequestBody: Empty
 - curl --location 'localhost:3000/tasks/2'

4) 
 - Method: PUT
 - Endpoint: `/tasks/:id`
 - Description: Update task by ID 
 - RequestBody: `{"title" : "string", "description": "string", "completed": boolean}`
 - The Request Body above can also accept "priority" as a key parameter with value being one of ["low", "medium", "high"], if no value provided the priority will be taken as low.
 - curl --location --request PUT 'localhost:3000/tasks/2' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Update title 2",
  "description": "Create a new project using Magic updated 2",
  "completed": false
}' 

 5) 
 - Method: DELETE
 - Endpoint: `/tasks/:id`
 - Description: Delete task by ID 
 - RequestBody: null
 - curl --location --request DELETE 'localhost:3000/tasks/1'

6) 
 - Method: GET
 - Endpoint: `/tasks/priority/:level`
 - Description: Get Task by Priority
 - RequestBody: null
 - curl --location 'localhost:3000/tasks/priority/medium'

