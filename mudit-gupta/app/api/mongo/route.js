import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// Replace the uri string with your connection string.
// const uri = "<connection string uri>";

export async function POST(request) {
  let body = await request.json();

  const uri =
    "mongodb+srv://" +
    process.env.NEXT_PUBLIC_USERNAME +
    ":" +
    process.env.NEXT_PUBLIC_PASSWORD +
    "@contact.bkdz5.mongodb.net/?retryWrites=true&w=majority&appName=Contact";

  const client = new MongoClient(uri);

  try {
    const database = client.db("data");
    const value = database.collection("values");

    const data = await value.insertOne(body);
    return NextResponse.json({ ok: true, data });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//tNeLRzqZTRrct9UR
//muditgupta1711
