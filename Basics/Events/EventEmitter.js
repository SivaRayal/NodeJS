const eventEmitt=require('events');
const em=new eventEmitt();

function f1(data){
    console.log("Data from f1 function : ",data);
}

let f2=(data)=>{
    console.log("Data from f2 function : ",data);
}

em.once('myEvent',f1); // event listner for only once ignore next events after exec
em.addListener('myEvent',f2); // adding new listerner for the event

console.log(em.listeners('myEvent')); 

em.emit('myEvent',"My first event js");
em.emit('myEvent',"My Secound event js");

console.log(em.listeners('myEvent'));

em.on('myEvent',f1);
em.removeListener('myEvent',f2);

console.log(em.listenerCount('myEvent'));

em.emit('myEvent',"My Final Event..!");