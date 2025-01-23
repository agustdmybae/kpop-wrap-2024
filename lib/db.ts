import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://stephchen:SKSNyJwRrwVEOmEq@cluster-1.eulq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"
    );
    return client;
  }

  