const http = require('http');

const myMiddleware = (req, res, next) => {
  console.log('Middleware executed');
  // Modify the request or response object if needed
  req.customProperty = 'Added by middleware';
  next(); // Call the next middleware or route handler
};

const requestHandler = (req, res) => {
  console.log(req.customProperty); // Access the modified request object
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
};

const server = http.createServer((req, res) => {
  // Apply the middleware
  myMiddleware(req, res, () => {
    // Call the request handler after the middleware
    requestHandler(req, res);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});