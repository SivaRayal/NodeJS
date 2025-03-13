const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Welcome the NODEJS Http Module");
    res.end();
});

server.listen(8080,'localhost',(err)=>{ 
    if(err) 
        console.log('Failed to send response',err)
    console.log('Server is running at port 8080');
}); 