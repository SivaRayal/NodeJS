const http=require('http');
const url=require('url');

const server=http.createServer((req,resp)=>{
    const htmlContent={'contenty-type':'text/html'};
    if(req.method=='GET' && req.url=='/'){
        resp.writeHead(404,htmlContent);
        resp.end('Welcome to QueryParam tutorial:  use /queryParam?userName=<> to get values of queryparm')
    }
    else if(req.method=='GET' && req.url.startsWith('/queryParam')){
        let queryParm=url.parse(req.url,true).query;
        console.log('QueryParam Username : ',queryParm.userName);
        resp.writeHead(200,htmlContent);
        resp.end(`QueryParam Username : ${queryParm.userName}`)
    }else{
        resp.writeHead(404,htmlContent);
        resp.end('Request resource Not Found.')
    }

});

server.listen(8080,(err)=>{
    if(err)
        console.log('Failed to start server');
    console.log('Server running at : http://localhost:8080/');
})