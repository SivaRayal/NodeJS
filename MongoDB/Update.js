const {MongoClient} = require('mongodb');

const url="mongodb://localhost:27017";
const client=new MongoClient(url);

const dbName="nodeDemoDB";
const collName="Users";

async function mongoConnectUpdate(){
    const conn=await client.connect(url);
    const coll=await conn.db(dbName);
    const db=await coll.collection(collName);

    const myQuery={ name:"Siva Rayal"};
    const newValue={$set:{name:"Siva Rayal", age:34, address:"Kurnool"}};

    const result=await db.updateOne(myQuery,newValue);
    console.log("Update Sucessfull ");
}

mongoConnectUpdate()
    .then(console.log("Clossing DB connection..."))
    .catch((err)=>{console.error("Failed to update DB :  ",err)})
    .finally(()=>{client.close()});