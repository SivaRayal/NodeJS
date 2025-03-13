const http=require('http');
const url=require('url');
var users=[{name:'SivaSai', skills:'Springboot'},{name:'SivaRayal', skills:'NodeJS'}];

http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><body><h1>Welcome to NodeJS HTTP Module</h1></body></html>');
        res.end();
    }
    else if(req.method=='GET' && req.url=='/users'){
        res.writeHead(200,{'content-type':'application/json'})
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.method=='POST' && req.url=='/user'){
        var reqPayload="";
        req.on('data',(chunk)=>{
            reqPayload+=chunk.toString();
        })
        req.on('end',()=>{
            reqPayload=JSON.parse(reqPayload);
            console.log(reqPayload);
            users.push(reqPayload);
            res.writeHead(201,{'content-type':'application/json'})
            console.log("User registration completed.");
            res.write(JSON.stringify(users));
            res.end();
        })
    }
    else if(req.method=='PUT' && req.url.startsWith('/user')){
        let queryParm=url.parse(req.url,true).query;
        console.log(queryParm);
        console.log(queryParm.skills);
        var update={name:queryParm.name,skills:queryParm.skills};
        users= users.map(x => (x.name===queryParm.name?update:x));
        res.writeHead(200,{'content-type':"text/html"});
        res.end(`User skills updated ${JSON.stringify(users)}`);
    }
    else if(req.method==='DELETE' && req.url.startsWith('/user')){
        let queryParam=url.parse(req.url,true).query;
        let index=users.findIndex(x=>(x.name===queryParam.name));
        if(index!==-1){
            //users=users.filter(x=>(x.name!==queryParam.name));
            users.splice(index,1);
            res.writeHead(200,{'content-type':"text/html"});
            res.end(`User removed from records`);
            console.log('User removed from records - ',users );
        }else{
            res.writeHead(200,{'content-type':"text/html"});
            res.end(`User Not Found in records to remove`);
            console.log('User Not Found - ',users ); 
        }
    }
    else{
        console.log('Caught 404 Unhandled Error')
        res.writeHead(404,{'content-type':"text/html"});
        res.end('Requested URL not found..!');
    }
}).listen(3000,(err)=>{
    if(err)
        console.log('Error in starting local server');
    console.log('Server is runnin up at http://localhost:3000');
})