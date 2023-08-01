const fs = require('node:fs')
let wordCount = require('./wordcount')

let analysisOut = { leave: 0, absent: 0 };

let data = fs.readFileSync("../resource/userdata.txt", "utf-8")
let linesList = data.toString().split("\n");
linesList.forEach((current, index, arr) => {
    let tempAnalysis = wordCount(current);
    analysisOut.absent += tempAnalysis.absent;
    analysisOut.leave += tempAnalysis.leave;
})

const Output = "Absent : " + analysisOut.absent + "  Leave : " + analysisOut.leave;
fs.writeFile('../resource/analysis.txt', Output, (err) => {
    // console.log(err)
})

console.log(Output);