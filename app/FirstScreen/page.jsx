'use client'

import { FirstLogo } from '@/components';
import { useState, useEffect } from 'react';
import { Audio } from '@/components';

export default function FirstScreen() {
  const [white, setWhite] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWhite(true);
    }, 3000);

    const letter = setTimeout(() => {
      setLogo(true);
    }, 5000);

    return () => clearTimeout(timer, letter);
  }, []);

    return (
    <div className="white-transition flex items-center justify-center w-screen h-screen">
        <div className='w-2/5 h-3/5 flex flex-col'>

          <div className='w-full h-1/5 flex justify-center items-center'>
            <span className={`${!logo ? 'hidden' : ''}
             text-sony-color font-sony-font font-bold lg:text-8xl`}
             >SONY</span>
          </div>

          {!white ? '' : <FirstLogo />}

          <div className='w-full h-1/5 flex flex-col justify-center items-center'>
            <span className={`${!logo ? 'hidden' : 'text-appear'} 
            w-full h-3/5 text-sony-color text-5xl flex items-end justify-center font-sony-font`}
            >COMPUTER</span>
            <span className={`${!logo ? 'hidden' : 'text-appear'} 
            w-full h-2/5 text-sony-color text-3xl flex items-start justify-center font-sony-font`}>ENTERTAINMENT &trade;</span>
          </div>
        </div>

        <Audio src='/ps-sound.mp3' />
    </div>
    )
}