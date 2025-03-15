const path=require('path');

let currentFile=path.basename(__filename);
console.log(currentFile);

let currentFilePath=path.parse(__filename);
console.log(currentFilePath);

let currentDir=path.parse(__dirname);
console.log(currentDir.dir);

let currentFileDir=path.join(__dirname,"../resources","text1.txt");
console.log(currentFileDir);

let resolvePath=path.resolve('text1.txt');
console.log(resolvePath);

// process.cwd - current Working dir
console.log(process.cwd());

