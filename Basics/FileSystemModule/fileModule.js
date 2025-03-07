/*
    Add a header content to a text file
*/

const fs=require("fs");
const path=require('path');
var fileheader="Hi There, Consider this is Header\n";
// read the file first
fs.readFile(path.join(__dirname,"../resources","text1.txt"),(err,data)=>{
    if(err)
        console.log("Read operation failed");
    else{
        fileheader=fileheader+data.toString();
        fs.writeFile(path.join(__dirname,"../resources/text1.txt"),fileheader,(err)=>{
            if(err)
                console.log("Write operation failed");
            else
                console.log("Write Sucessfull");
        })
    }

})
