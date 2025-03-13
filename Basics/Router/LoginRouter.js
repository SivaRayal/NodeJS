const express=require('express');
const loginRouter=express.Router();
const path=require('path');

loginRouter.get("/",(req,res)=>{
    const fineName=path.join(__dirname,"public","login.html");
    res.sendFile(fineName);
})

module.exports=loginRouter;
