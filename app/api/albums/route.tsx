import { NextResponse } from 'next/server';
import { connectToDatabase } from "../../../lib/db";
 

export async function GET() {
  const client = await connectToDatabase();

  const topAlbumCollections = client.db("kpop").collection("topAlbums");
  const topAlbums = await topAlbumCollections.find({}).limit(5).toArray();
  return NextResponse.json(topAlbums);
}