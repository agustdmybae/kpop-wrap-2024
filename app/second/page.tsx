

export default function Second() {
  const songs = [
    {artist: "Aespa", song: "Supernova"},
    {artist: "IU", song: "Love wins all"},
    {artist: "(G)I-dle	", song: "Fate"},
    {artist: "Day6	", song: "Time of our life"},
    {artist: "Lim Jae Hyun", song: "Rhapsody of Sadness"},
    {artist: "Aespa", song: "Supernova"},
    {artist: "IU", song: "Love wins all"},
    {artist: "(G)I-dle	", song: "Fate"},
    {artist: "Day6	", song: "Time of our life"},
    {artist: "Lim Jae Hyun", song: "Rhapsody of Sadness"},
  ]
  
  const songList = songs.map((data, index)=>
    <div key={index} className="grid grid-cols-2 gap-20 text-lg pb-2">
      <div>{index+1}. {data.song}</div>
      <div>{data.artist}</div>
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