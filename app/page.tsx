import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center min-h-screen gap-6">
        <a className="text-yellow-300 text-7xl font-bold">2024 KPOP Wrapped.</a>
        <div className="flex flex-col justify-center items-center">
          <a className="text-yellow-300 text-2xl">Another epic year of KPOP</a>
          <a className="text-yellow-300 text-2xl">Let’s rewind on the amazing moments</a>
        </div>
        <Link className='border-solid border-2 rounded border-yellow-300 w-20 h-8 text-center text-yellow-300 text-2xl' href="/first">→</Link>
      </main>
      {/* 
      <div className="font-[family-name:var(--font-geist-sans)] my-52">
        <div className='flex ml-52'>
          <Image src={blob3} alt="Deco blob image"/>
        </div>
        <main className="flex flex-col items-center justify-center">
          <a className="text-yellow-300 text-7xl font-bold pb-10">2024 KPOP Wrapped.</a>
          <div className="flex flex-col justify-center items-center">
            <a className="text-yellow-300 text-2xl">Another epic year of KPOP</a>
            <a className="text-yellow-300 text-2xl">Let’s rewind on the amazing moments</a>
          </div>
        </main>
        <div className='flex flex-row-reverse mr-60'>
            <Image src={blob} alt="Deco blob image"/>
        </div>
        <button>go</button>
      */}
    </div>
  );
}
