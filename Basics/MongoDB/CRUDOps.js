

let db;
async function connectDB{
    if(db) return db;
    const client=new MongoClient(uri); // we can add another parm to specify max connections.
    await client.connect();
    db=client.db(dbName);
    console.log("Connected to db successfully");
    return db;
}