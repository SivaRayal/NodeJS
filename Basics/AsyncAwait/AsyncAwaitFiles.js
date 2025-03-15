const fs = require('fs').promises;
const path = require('path');

async function mergeTwoFiles(){
    try{
        const data1= await fs.readFile(path.join(__dirname,"../resources/text1.txt")); // awwait keyword holds the process untill promis is resolved. 
        const data2= await fs.readFile(path.join(__dirname,"../resources/text2.txt")); // holds the process untill promis is resolved. 

        let mergedData = data1+'\n'+data2;
        fs.writeFile(path.join(__dirname,'../resources/MergedFile.txt'),mergedData); // unhandled async operations
        console.log("File Merged sucessfull"); // returned before merge async operations
    }catch(err){
        console.log('Failed when mergeint two files into 3rd..');
    }
    
}

mergeTwoFiles();