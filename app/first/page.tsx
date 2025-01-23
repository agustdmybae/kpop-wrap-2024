import Link from 'next/link'
import useSWR from 'swr'

export default function First() {
  const albums = [
    {artist: "Seventeen", album: "12TH MINI ALBUM `SPILL THE FEELS`", sales: "~3.179.000+"},
    {artist: "Seventeen", album: "BEST ALBUM `17 IS RIGHT HERE`", sales: "~3.093.000+"},
    {artist: "Stray Kids", album: "ATE", sales: "~2.875.000+"},
    {artist: "Enhypen", album: "ROMANCE : UNTOLD", sales: "~2.377.000+"},
    {artist: "NCT DREAM", album: "DREAM( )SCAPE", sales: "~2.217.000+"},
    {artist: "Seventeen", album: "12TH MINI ALBUM `SPILL THE FEELS`", sales: "~3.179.000+"},
    {artist: "Seventeen", album: "BEST ALBUM `17 IS RIGHT HERE`", sales: "~3.093.000+"},
    {artist: "Stray Kids", album: "ATE", sales: "~2.875.000+"},
    {artist: "Enhypen", album: "ROMANCE : UNTOLD", sales: "~2.377.000+"},
    {artist: "NCT DREAM", album: "DREAM( )SCAPE", sales: "~2.217.000+"},
  ]

  const albumList = albums.map((data, index)=>
    <div key={index} className="grid grid-cols-4 gap-20 text-lg pb-2">
      <div className="col-span-2">{index+1}. {data.album}</div>
      <div>{data.artist}</div>
      <div>{data.sales}</div>
    </div>
  )
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <a className="text-yellow-300 text-4xl font-bold">More than 200 albums are released in the year.</a>
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