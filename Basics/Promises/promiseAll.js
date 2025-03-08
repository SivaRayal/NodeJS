
const fs=require('fs').promises;
const path=require('path');

Promise.all([
    fs.readFile(path.join(__dirname,"../resources","text1.txt")),
    fs.readFile(path.join(__dirname,"../resources","text2.txt")),
    fs.readFile(path.join(__dirname,"../resources","text3.txt"))
]).then((data)=>{
    const mergeddata=data.join('\n');
    fs.writeFile(path.join(__dirname,"../resources/MergedFile.txt"),mergeddata);
    console.log('Write Operation sucessfull');
}).catch((err)=>{
    console.log('Error in merging all 3 files');
})