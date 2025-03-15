
// function return a promise - 1st
function fetch(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("Data Fetched")},1000);
    });
}


// function return a promise - 2nd
function process(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(`Processed : ${data}`);},2000);
    });
}

// handling 1st promise
fetch()
    .then((data)=>{return process(data);}) // returning 2nd promise handler.
    .then((procssedData)=>{ console.log(procssedData)}) // handling 2nd promise.
    .catch((err)=>{console.error(err)});