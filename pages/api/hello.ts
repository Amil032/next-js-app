// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb'
type Data = {
  name: string,
  success:any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Connection URI
const uri ="mongodb+srv://amilo9325:9jWTzdB17JfhEo1E@cluster0.jkee14p.mongodb.net/?retryWrites=true&w=majority";
// Create a new MongoClient
  const client = new MongoClient(uri);
  let k:string='loading';
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const database = client.db("test");
    const movies = database.collection("test-collection");
    const query = { _id: '63a418e3ff346e0a0ff1b088' }
     const movie = await movies.findOne(query)
    console.log(movie)
     res.status(200).json({ name: 'John Doe',success:movie })
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
     console.log("Connected successfully to server")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
 
  run().catch(err => console.log(err))
  
 
}
