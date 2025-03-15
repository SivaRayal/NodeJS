function nonBlockingTask(){
    console.log('Task Started')
    setTimeout(()=>{
        let count=0;
        for(let i=0;i<100000000;i++)
            count++;    
        console.log(`Total count - ${count}`);
        console.log('Task Completed');  
    },0);
    
}

console.log('Before Non Blocking Task..!');
nonBlockingTask();
console.log('After Non Blocking Task..!')