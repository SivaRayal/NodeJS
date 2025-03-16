const {MongoClient} =require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const dbName="nodeDemoDB";

async function connectMongo(){
    const conn=await client.connect(url);
    const db=await conn.db(dbName);
    const coll=await db.collection('Users');

    const result=await coll.findOne();
    console.log(result.name);
}

connectMongo()
    .then(console.log(" Clossing DB connection "))
    .catch(console.error("Error in connecting DB"))
    .finally(()=>{client.close()});