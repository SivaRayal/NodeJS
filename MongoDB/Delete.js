const {MongoClient} = require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const dbName="nodeDemoDB";
const collName="Users";

async function mongoConnectUpdate(){
    const conn=await client.connect(url);
    const coll=await conn.db(dbName);
    const db=await coll.collection(collName);

    const myQuery={ name:"Siva Rayal",age:34,};

    const result=await db.deleteOne(myQuery);
    console.log("Deleted Sucessfull ");
}

mongoConnectUpdate()
    .then(console.log("Clossing DB connection..."))
    .catch((err)=>{console.error("Failed to delete DB :  ",err)})
    .finally(()=>{client.close()});