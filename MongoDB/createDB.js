const {MongoClient} = require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const dbName="nodeDemoDB";

async function main(){
    const conn=await client.connect(url);
    console.log("NodeJs to MongoDB Connection Established");
    const db= await client.db(dbName);
    console.log("Connect to BD : ",dbName);
}

main()
    .then(console.log("DB connection Sucessfull"))
    .catch(console.error("Error while connecting to DB"))
    .finally(()=>client.close());