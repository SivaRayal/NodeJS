const http = require('http');
const fs=require('fs');
const path=require('path');

var usersDB=[
    { id: 1, name: "John Doe", email: "johndoe@mycompany.com" },
    { id: 2, name: "Sivasai Kuruva", email: "p7167176@mycompany.com" },
    { id: 3, name: "Sudha", email: "partha@mycompany.com" },
    { id: 4, name: "Prakash", email: "prakash@mycompany.com" }
];

const server=http.createServer((req,resp)=>{
    if(req.method=='GET' && req.url=='/'){
        resp.writeHead(200,{'content-type':'text/html'});
        resp.end("Welcome to the Custom HTTP Server");
    }

    // users 
    if(req.method=='GET' && req.url=='/api/users' ){
        resp.writeHead(200,{'content-type':'plain/text'});
        resp.write(JSON.stringify(usersDB));
        resp.end();
    }

    if(req.method=='POST' && req.url=='/api/addUser'){
        console.log('Adding user to internal userDB');
        let data="";
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        req.on('end',()=>{
            console.log(data);
            usersDB.push(data);
            resp.writeHead(201,{'content-type':'text/html'});
            resp.end("User Registration - Success");
        })
        req.on('error',()=>{
            resp.writeHead(404,{'content-type':'plain/text'});
            resp.end("Error while registering user");
        })
    }

    if(req.method=='PUT' && req.url=='/api/updateUser'){
        console.log('Update user to internal userDB')
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        req.on('end',()=>{
            usersDB=usersDB.map(x=>(x.id===data.id ? data:x));
            resp.writeHead(200,{'content-type':'plain/text'});
            resp.end('Updated User - Successfull');
        })
        req.on('error',()=>{
            resp.writeHead(500,{'content-type':'plain/text'});
            resp.end("Internal error while updating user");
        })
    }

    if(req.method=='DELETE' && req.url=='/api/removeUser'){
        console.log('Remove user from userDB')
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk;
        })
        req.on('end',()=>{
            usersDB=usersDB.filter(x=>(x.id !== data.id ));
            resp.writeHead(200,{'content-type':'plain/text'});
            resp.end('Removed User - Successfull');
        })
        req.on('error',()=>{
            resp.writeHead(500,{'content-type':'plain/text'});
            resp.end("Internal error while removing user");
        })
    }


    // files
    if(req.method=='GET' && req.url.startsWith('/files/')){
        let fileName=path.join(__dirname,"public",req.url.replace('/files/',""));
        let reader=fs.createReadStream(fileName);
        reader.pipe(res);
    }

});

server.listen(8080,'localhost');
console.log(' Custom HTTP Server is running on http://localhost:8080/')