import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
let client = null;

export const connectMongo = async () => {
  try {
    client = await MongoClient.connect(MONGO_URI);
    console.log("Connection Succesfull ");
    return client;
    
  } catch (error) {
    console.log("MongoDB is not connect");
  }
};
