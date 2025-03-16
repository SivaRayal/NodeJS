const {MongoClient} =require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const dbName="nodeDemoDB";

async function connectMongo(){
    const conn=await client.connect(url);
    const db=await conn.db(dbName);
    const coll=await db.createCollection('Users');

    let userObj={name:"Sivasai Kuruva", age:35, address:"Hyderabad"};
    await coll.insertOne(userObj);
}

connectMongo()
    .then(console.log(" Clossing DB connection "))
    .catch(console.error("Error in connecting DB"))
    .finally(()=>{client.close()});