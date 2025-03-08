function myFunc(n1,n2){
    setTimeout(()=>{
        let res=n1*n2;
        console.log(res);
        return res;
    },5000);
}


console.log('Multiplication of 10 and 2 is : ');
let out=myFunc(10,2);
console.log('Output will be displayed after 5 sec..!');
console.log(out);