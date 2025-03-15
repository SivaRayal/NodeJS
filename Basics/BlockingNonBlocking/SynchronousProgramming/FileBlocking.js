const fs = require('fs');
const path = require('path');

function readFileTask(){
    console.log('Starting Read File Task..')
    let data=fs.readFileSync(path.join(__dirname,"../resources/hugefile.txt"));    
    console.log('Data from File : '+data.toString());
    console.log('Read File Task Compleated..')
}

console.log('Before File Reading Task..!');
readFileTask();
console.log('Adter File Reading Task ..!');