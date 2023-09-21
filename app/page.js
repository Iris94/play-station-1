import Image from 'next/image'
import { FirstLogo } from '@/components'

export default function Home() {
  return (
    <main className="bg-white flex items-center justify-center w-screen h-screen">
      <div className='lg:w-2/5 lg:h-3/5 flex flex-col'>
        <div className='w-full h-1/5 border-2 border-green-500 flex justify-center items-center'>
          <span className='text-black font-bold lg:text-8xl'>SONY</span>
        </div>
        <FirstLogo />
        <div className='w-full h-1/5 border-2 border-blue-500 flex justify-center items-center'></div>
      </div>
    </main>
  )
}
