import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../lib/db";

// type ResponseData = {
//     id: number,
//     artist: string,
//     albumTitle: string,
//     sales: string,
//   }
 


export async function GET() {
  const client = await connectToDatabase();

  const topAlbumCollections = client.db("kpop").collection("topAlbums");
  const topAlbums = await topAlbumCollections.find({}).toArray();
  return NextResponse.json(topAlbums);
}