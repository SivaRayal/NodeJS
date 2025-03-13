const request=require('request');
request('http://www.google.com',(err,resp,body)=>{
    console.log('Error : ',err);
    console.log('statusCode : ', resp && resp.statusCode);
    console.log('body : ',body);
});