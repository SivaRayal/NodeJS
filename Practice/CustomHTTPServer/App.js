const http = require('http');
const fs=require('fs');
const path=require('path');

var usersDB=[
    { id: 1, name: "John Doe", email: "johndoe@mycompany.com" },
    { id: 2, name: "Sivasai Kuruva", email: "p7167176@mycompany.com" },
    { id: 3, name: "Sudha", email: "partha@mycompany.com" },
    { id: 4, name: "Prakash", email: "prakash@mycompany.com" }
];

// Custom Middleware
const myloggingMiddleware=(req,resp,next)=>{
    let data="";
    req.on('data',(chunk)=>{
        data+=chunk.toString();
    })
    req.on('end',()=>{
        console.log(`Incomming request logged : ${data}`);
    })
    req.on('error',()=>{
        console.log(`Error in loggin request`);
    })
    next();
}

// Request Handler
const requestHandler=(req,resp)=>{
    if(req.method==='GET' && req.url==='/'){
        resp.writeHead(200,{'content-type':'text/html'});
        resp.end("<html><body><h1>Welcome to the Custom HTTP Server</h1></body></html>");
    }

    // users 
    else if(req.method==='GET' && req.url==='/api/users' ){
        resp.writeHead(200,{'content-type':'application/json'});
        resp.write(JSON.stringify(usersDB));
        resp.end();
    }

    else if(req.method==='POST' && req.url==='/api/users'){
        console.log('Adding user to internal userDB');
        let data="";
        req.on('data',(chunk)=>{
            data+=chunk.toString();
        })
        req.on('end',()=>{
            usersDB.push(JSON.parse(data));
            resp.writeHead(201,{'content-type':'text/html'});
            resp.end("User Registration - Success");
        })
        req.on('error',()=>{
            resp.writeHead(500,{'content-type':'text/html'});
            resp.end("Error while registering user");
        })
    }

    else if(req.method=='PUT' && req.url=='/api/users'){
        console.log('Update user to internal userDB')
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        req.on('end',()=>{
            usersDB=usersDB.map(x=>(x.id==JSON.parse(data).id ? JSON.parse(data):x));
            resp.writeHead(200,{'content-type':'text/html'});
            resp.end('Updated User - Successfull');
        })
        req.on('error',()=>{
            resp.writeHead(500,{'content-type':'text/html'});
            resp.end("Internal error while updating user");
        })
    }

    else if(req.method=='DELETE' && req.url=='/api/users'){
        console.log('Remove user from userDB')
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        req.on('end',()=>{
            usersDB=usersDB.filter(x=>(x.id !== JSON.parse(data).id ));
            resp.writeHead(200,{'content-type':'text/html'});
            resp.end('Removed User - Successfull');
        })
        req.on('error',()=>{
            resp.writeHead(500,{'content-type':'text/html'});
            resp.end("Internal error while removing user");
        })
    }


    // files
    else if(req.method=='GET' && req.url.startsWith('/files/')){
        let fileName=path.join(__dirname,"public",req.url.replace('/files/',""));
        const reader = fs.createReadStream(fileName);
        reader.on('error', (err) => {
            resp.writeHead(404, {'content-type': 'text/html'});
            resp.end("Page not found");
        });
        reader.pipe(resp);
    }

    else {
        resp.writeHead(404,{'content-type':'text/html'});
        resp.end("Request page not found.!");
    }
}

// create server
const server=http.createServer((req,resp)=>{
    myloggingMiddleware(req,resp,()=>{
        requestHandler(req,resp);
    });
});

server.listen(3000,'localhost');
console.log(' Custom HTTP Server is running on http://localhost:8080/')