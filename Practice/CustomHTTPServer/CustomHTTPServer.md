# Build a Custom HTTP Server with Advanced Features
_Author_ : **Siva Kuruva.**

*Email* - __kuruva.siva8055@gmail.com__

## Objective
The goal of this assignment is to deepen your understanding of the http module in Node.js by creating a custom HTTP server with advanced features. You will demonstrate your knowledge of handling HTTP requests, responses, headers, routing, middleware, and error handling.

## Instructions
### Build the HTTP Server:
* Create an HTTP server using the http module.
* Use the server to handle different types of HTTP methods: `GET`, `POST`, `PUT`, `DELETE`.

### Dynamic Routing:
* Implement a custom routing system that can handle the following routes:
    * `/`: Respond with "Welcome to the Custom HTTP Server".
    * `/api/users`: Handle CRUD operations (Create, Read, Update, Delete) for a simulated user database.
        * Use an in-memory array to store user data.
        * Example user object: ```{ id: 1, name: "John Doe", email: "johndoe@example.com" }```.
    * `/files/:filename`: Serve static files from a public directory.
 
### Request Body Parsing:
* Implement a request body parser to handle incoming JSON payloads for `POST` and `PUT` requests.
* Parse the payload and update the in-memory data accordingly.

### Custom Middleware:
* Implement a logging middleware that logs each request's method, URL, and timestamp to the console.

### Error Handling:
* Handle invalid routes with a `404 Not Found` response.
* Gracefully handle server errors and return an appropriate error message (e.g., `500 Internal Server Error`).
 