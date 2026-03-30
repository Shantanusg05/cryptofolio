const { MongoClient } = require('mongodb');

let client;
let db;

async function connectDB() {
    if (!client) {
        client = new MongoClient(process.env.MONGODB_URL);
        await client.connect();
        db = client.db("cryptofolio");
        console.log("MongoDB Connected");
    }
    return db;
}

module.exports = connectDB;