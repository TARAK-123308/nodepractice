const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME; 
const client = new MongoClient(url);

let db;
let collection;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    collection = db.collection(collectionName);
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" Error while connecting to DB:", err);
  }
}

const getDB = () => db;
const UserCollection = () => collection;

module.exports = { connectDB, getDB, UserCollection };
