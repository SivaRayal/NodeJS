const fs = require('fs');
const path=require('path');

const reader = fs.createReadStream(path.join(__dirname,"../resources/hugefile.txt"), {encoding:'utf-8'});
const writer = fs.createWriteStream(path.join(__dirname,"../resources/hugefile2.txt"));

reader.pipe(writer);

reader.on('error',(err)=>console.log('Reader Error: ',err));
writer.on('error',(err)=>console.log('Writer Error: ',err));
writer.on('finish',()=>console.log('Done Writing huge file!'));