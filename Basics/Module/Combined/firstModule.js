// print on console
console.log("Hi There..!");

// variable
var a=34;
var str="I am Siva";
console.log(`${str} I am ${a} years old.`)

// function
function addNums(n1,n2){
    return n1+n2;
}



// try catch
try{
    var res=addNums(10,20);
    console.log("Result for adding 10 and 20 : "+res);
    throw "Exception";
    console.log("Discontinued statment");
}
catch(e){
    console.log("Caught "+e);
}
finally{
    console.log("Finally Done with First Module");
}

// export function
module.exports={addNums};