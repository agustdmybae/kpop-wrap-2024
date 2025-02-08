'use client'

import { motion } from 'framer-motion';
import Link from 'next/link'
import useSWR from 'swr'
import Image from 'next/image'

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
    sales: number;
    image: string;
  }

  const maxSales = Math.max(...data.map((album: AlbumData) => album.sales)); // Find the maximum sales value

  const albumList = data.map((album: AlbumData, index: number) =>
    <div key={index} className="flex flex-col gap-12 text-lg pb-2">
      <div className="flex flex-row gap-3">
        <div className='font-extrabold text-7xl text-yellow-300'>{index + 1}</div>
        <div className='max-w-48 h-8 font-bold text-xl text-white'>{album.albumTitle}</div>
      </div>
      <div className='flex flex-row items-end gap-4'>
        <div className="flex flex-col justify-end h-64 text-yellow-300">
          <div className="bg-yellow-300" style={{
              height: `${(album.sales / maxSales) * 250}px`, // Calculate height based on sales
              width: '30px', // Set a fixed width for the rectangles
            }}></div>
        </div>
        <div className='relative w-28 h-28'>
          <Image 
            src={album.image}
            layout="fill"
            objectFit="cover"
            alt="Picture of the album"
          />
        </div>
      </div>
      <div className='text-yellow-300'>{album.sales / 1000}M+</div>
    </div>
  )
    return (
      <div className='relative h-[200vh]'>
        <div className=" bg-yellow-300 h-screen sticky top-0 flex flex-col items-center justify-center min-h-screen">
          <motion.a 
            style={{overflow:"hidden", whiteSpace:"nowrap", textAlign: "center"}}
            initial={{width:0}}
            animate={{width:"100%"}}
            transition={{duration:3, ease:"easeInOut"}}
            className="text-black text-5xl font-bold"
          >More than 300 Kpop albums are released in the year.</motion.a>
        </div>
        <div className="relative h-screen bg-black flex flex-col gap-6 items-center justify-center">
          <a className="text-yellow-300 text-4xl font-bold">Among all the masterpieces, these albums stand out.</a>
          <a className="text-yellow-300 text-2xl font-medium">2024 Best Selling Kpop Albums. Do you spot your favorite one?</a>
          <div className="my-3 text-black rounded-lg p-8 flex flex-row gap-24">
            {albumList}
          </div>
          <Link className='border-solid border-2 rounded border-yellow-300 w-20 h-8 text-center text-yellow-300 text-2xl' href="/second">→</Link>
        </div>
      </div>
      
  )
  }