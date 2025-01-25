'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center min-h-screen gap-6">
        <motion.a 
          className="text-yellow-300 text-7xl font-bold"
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0 }} 
          transition={{duration:0.7}}
        >2024 KPOP Wrapped.</motion.a>
        <motion.div
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0 }} 
          transition={{duration:0.7, delay:1.5}}
          className="flex flex-col items-center justify-center gap-5"
        >
          <div className="flex flex-col justify-center items-center">
            <a className="text-yellow-300 text-2xl">Another epic year of KPOP</a>
            <a className="text-yellow-300 text-2xl">Let’s rewind on the amazing moments</a>
          </div>
          <motion.div
            whileHover={{scale:1.1}}
          >
            <Link className='border-solid border-2 rounded border-yellow-300 px-4 text-center text-yellow-300 text-2xl' href="/first">→</Link>
          </motion.div>
        </motion.div>
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
