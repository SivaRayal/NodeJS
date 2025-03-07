/*
    Read from huge file and write to another file in chunks
*/

const fs=require('fs');

var reader=fs.createReadStream("resources/hugefile.txt");
var writer=fs.createWriteStream("resources/hugefile2.txt");

let chunks=0;

reader.on("data",(chunk)=>{
    chunks++;
    writer.write(chunk);
});

reader.on("end",()=>{
    console.log("Total chunks read: "+chunks);
    writer.end();
});

reader.on("error",(err)=>{
    console.log("Error in reading file");
});