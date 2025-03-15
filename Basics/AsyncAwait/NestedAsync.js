const fetch=require('node-fetch'); // node-fetch v3 require ESS import

// asyncc function - 1
const jokeById= async (jokeId)=>{
    let response= await fetch(`https://my-json-server.typicode.com/SivaRayal/RandomJokes/developer/${jokeId}`);
    return response.json();
}

// asyncc function - 2
const actorsById= async (actorId)=>{
    let response = await fetch(`https://my-json-server.typicode.com/SivaRayal/RandomJokes/actors/${actorId}`);
    return response.json();
}

// asyncc function - 3
async function tellMeAJoke(){
    try{
        const randSelector=Math.floor((Math.random()*30)+1);
        const actors=await actorsById(randSelector); // processing asyncc function - 1 nested under fun 3
        const jokes=await jokeById(randSelector); // processing asyncc function - 2 nested under fun 3
        let actorsList=actors.roles.split("|||");
        let jokesList=jokes.joke.split("|||");
        console.log(`${actorsList[0]} : ${jokesList[0]}`);
        setTimeout(()=>{console.log(`${actorsList[1]} : ${jokesList[1]}`)},2000);
    }catch(err){
        console.log("Groot : I AM GROOT..!");
    }
    
}

tellMeAJoke();