function blockingTask(){
    let count=0;
    console.log('Task Started');
    for(let i=0;i<100000000;i++)
        count++;
    console.log(`Count : ${count}`);
    console.log('Task Completed');
}

console.log('Before Blocking Task..!');
blockingTask();
console.log('After Blocking Task..!');