const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },1000);
});

myPromise
    .then(value=>{
    console.log(value);
    return value*2;
    }).then(newValue =>{
    console.log(newValue);
    return newValue+5;
    }).then(finalValue=>console.log(finalValue))
    .catch(err => console.log(err));

