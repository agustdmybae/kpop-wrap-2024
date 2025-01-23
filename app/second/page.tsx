'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(`/api${url}`).then((res) => res.json());

export default function Second() {
  const { data, error } = useSWR(
    "/songs",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  interface SongData {
    id: number;
    songTitle: string;
    artist: string;
  }
  
  const songList = data.map((song: SongData, index: number)=>
    <div key={index} className="grid grid-cols-2 gap-20 text-lg pb-2">
      <div>{index+1}. {song.songTitle}</div>
      <div>{song.artist}</div>
    </div>
  )
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <a className="text-yellow-300 text-4xl font-bold">Of course... there are many hits as well</a>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center min-h-screen">
          <a className="text-yellow-300 text-4xl font-bold">These are the Top 10 Streamed Songs</a>
          <div className="mt-8">
            {songList}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <a className="text-yellow-300 text-4xl font-bold">Can you guess which song</a>
          <a className="text-yellow-300 text-4xl font-bold">won the most music show awards?</a>
        </div>
      </div>
      
  )
  }