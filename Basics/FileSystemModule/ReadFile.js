const fs=require('fs');
const path=require('path')

let data=fs.readFileSync(path.join(__dirname,"../resources","text1.txt"));
console.log(data.toString());