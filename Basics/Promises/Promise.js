const myPromise=new Promise(
    (resolve,reject)=>{
        // handling async with promise and returning resolved / reject
        let flag=false;
        if(flag)
            resolve(10);
        else
            reject("Task Failed");
    }
);

myPromise
    .then(res=>{ // executes for Resolve() operations
        console.log(res);
    })
    .catch(err => console.log(err)) // executes for Reject() operations
    .finally(()=>{
        console.log('Sucessfully complted Promise Handling')
    });
