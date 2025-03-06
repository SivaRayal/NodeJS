/*
    Add a header content to a text file
*/

const fs=require("fs");
var fileheader="Hi There, Consider this is Header\n";
// read the file first
fs.readFile("resources/text1.txt",(err,data)=>{
    if(err)
        console.log("Read operation failed");
    else{
        fileheader=fileheader+data.toString();
        fs.writeFile("resources/text1.txt",fileheader,(err)=>{
            if(err)
                console.log("Write operation failed");
            else
                console.log("Write Sucessfull");
        })
    }

})
