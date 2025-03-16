const {MongoClient}=require('mongodb');

const url="mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName="nodeDemoDB";
const collectionName="Users";

async function mongoConnect(){
    const conn=await client.connect(url);
    const db=await conn.db(dbName);
    const coll = await db.collection(collectionName);
    
    const newUser={name:"Siva Rayal", age:35, address:"Kurnool"};
    await coll.insertOne(newUser);
    console.log("New user record inserted");
}

mongoConnect()
    .then(console.log("Closing connection"))
    .catch((err)=>console.error("Error wile insterting data into db",err))
    .finally(()=>{client.close()})