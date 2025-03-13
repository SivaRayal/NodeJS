// import http module
const http=require('http');

// create a server object
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.end('Welcome to Node.js');
}).listen(8080,'localhost',(err)=>{if(err) console.log(err);});

// Console will print the message
console.log('Server is running at http://localhost:8080/');

