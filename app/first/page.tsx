'use client'

import { motion } from 'framer-motion';
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(`/api${url}`).then((res) => res.json());

export default function First() {
  
  const { data, error } = useSWR(
    "/albums",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  interface AlbumData {
    id: number;
    albumTitle: string;
    artist: string;
    sales: string;
  }

  const albumList = data.map((album: AlbumData, index: number) =>
    <div key={index} className="grid grid-cols-4 gap-20 text-lg pb-2">
      <div className="col-span-2">{index + 1}. {album.albumTitle}</div>
      <div>{album.artist}</div>
      <div>{album.sales}</div>
    </div>
  )
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <motion.a 
            style={{overflow:"hidden", whiteSpace:"nowrap", textAlign: "center"}}
            initial={{width:0}}
            animate={{width:"100%"}}
            transition={{duration:2, ease:"easeInOut"}}
            className="text-yellow-300 text-4xl font-bold"
          >More than 300 Kpop albums are released in the year.</motion.a>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
          <a className="text-yellow-300 text-4xl font-bold">Among all the masterpieces, these albums stand out.</a>
          <a className="text-yellow-300 text-2xl">Do you spot your favorite one?</a>
          <div className="mt-8">
            {albumList}
          </div>
          <Link className='border-solid border-2 rounded border-yellow-300 w-20 h-8 text-center text-yellow-300 text-2xl' href="/second">→</Link>
        </div>
      </div>
      
  )
  }