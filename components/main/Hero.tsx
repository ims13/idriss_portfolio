// components/main/Hero.tsx


import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'
    id="about-me"
    >
       <HeroContent />
        <video 
        autoPlay
        muted
        loop
        playsInline
        // className='rotate-180 absolute top-[340px] right-400 z-[1] w-full sm:w-1/4 md:w-full h-2/3 md:h-full object-cover'
        className='rotate-180 absolute top-[-340px] left-0  z-[1] hidden sm:hidden md:block  w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'/>

        </video>
       
    </div>
  )
}

export default Hero
