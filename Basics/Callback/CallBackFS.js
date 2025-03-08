const fs = require('fs');
const path = require('path');

console.log("Before asyn function");

// callback function is passed inside asynch method to handle err/data that can be used for another async function.
let output=fs.readFile(path.join(__dirname,"../resources/MergedFile.txt"), (err,data)=>{
    console.log('Callback function started');
    if(err)
        console.log('Error in reading file');

    else{
        console.log(data.toString());
        return data;
    }
});

console.log("After asyn function");
console.log('Output - '+output)