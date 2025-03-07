var firstModule=require('./firstModule.js');
var res=firstModule.addNums(50,49);
console.log("Result : "+res);

function subNums(n1,n2){
    return n1-n2;
}

// exporting functions
function mulNums(n1,n2){
    return n1*n2;
}

//module.exports={subNums,mulNums}

//export function sqNum(n1){
//    return n1*n1;
//}

exports.modNum = (n1,n2)=>{
    return n1%n2;
}

module.exports={subNums,mulNums, ...exports}