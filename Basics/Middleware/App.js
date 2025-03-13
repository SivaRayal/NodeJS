const http=require('http');

const myLoggingMiddleware=(req,res,next)=>{
    let reqPayload="";
    req.on('data',(chunk)=>{
        reqPayload+=chunk.toString();
    })
    req.on('end',()=>{
        console.log(`Incomming request - ${reqPayload}`);
    })
    req.on('error',(err)=>{
        console.log('Failed whilt reading Request body');
    });
    next();
};

const requestHandler=(req, res)=>{
    let htmlContent={'content-type':"text/html"};
        
        if(req.method=="GET"&&req.url==='/'){
            res.writeHead(200,htmlContent);
            res.end('<html><body><h1>Hi this myMiddleway demo</h1></body></html>');
        }
        else if(req.method=="POST" && req.url==='/user'){
            let reqPayload="";
            req.on('data',(chunk)=>{
                reqPayload+=chunk.toString();
            })
            req.on('end',()=>{
                console.log(JSON.parse(reqPayload).name);
                res.writeHead(200,htmlContent);
                res.end('<html><body><h2>Middle ware logged request</h2></body></html>');            
            })
        }
}


http.createServer((req,res)=>{
    myLoggingMiddleware(req,res,()=>{
        requestHandler(req,res);
    });
}).listen(3000,()=>console.log("Server running on port 3000"));