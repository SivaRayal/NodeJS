const {Buffer} = require('buffer');
let buf= Buffer.alloc(10);
let str="Hi";
buf.write(str);
console.log(buf.toString());
console.log(`Buffer length : ${buf.length} amd String length is : ${str.length}`);