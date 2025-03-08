const fs = require('fs').promises;
const path = require('path');

async function mergeTwoFiles(){
    try{
        const data1= await fs.readFile(path.join(__dirname,"../resources/text1.txt"));
        const data2= await fs.readFile(path.join(__dirname,"../resources/text2.txt"));

        let mergedData = data1+'\n'+data2;
        fs.writeFile(path.join(__dirname,'../resources/MergedFile.txt'),mergedData);
        console.log("File Merged sucessfull");
    }catch(err){
        console.log('Failed when mergeint two files into 3rd..');
    }
    
}

mergeTwoFiles();