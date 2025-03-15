const myPromise=new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{resolve(10);},1000); // handling async with promise and returning resolved value - 10
    }
);

myPromise
    .then(value=>{ // executes for Resolve() operations
        console.log(value);
        return value*2; // returns value to chain
    })
    .then(newValue =>{  // gets value from previous promise.
        console.log(newValue);
        return newValue+5; 
    })
    .then(finalValue=>console.log(finalValue)) 
    .catch(err => console.log(err)) // executes for Reject() operations
    .finally(()=>{
        console.log('Sucessfully complted Promise Handling')
    });
