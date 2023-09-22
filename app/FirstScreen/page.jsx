import { FirstLogo } from '@/components'

export default function FirstScreen () {
    return (
    <div className="bg-white flex items-center justify-center w-screen h-screen">
        <div className='w-2/5 h-3/5 flex flex-col'>

          <div className='w-full h-1/5 flex justify-center items-center'>
            <span className='text-sony-color font-sony-font font-bold lg:text-8xl'>SONY</span>
          </div>

          <FirstLogo />

          <div className='w-full h-1/5 flex flex-col justify-center items-center'>
            <span className='w-full h-3/5 text-sony-color text-5xl flex items-end justify-center font-sony-font'>COMPUTER</span>
            <span className='w-full h-2/5 text-sony-color text-3xl flex items-start justify-center font-sony-font'>ENTERTAINMENT &trade;</span>
          </div>
        </div>
    </div>
    )
}