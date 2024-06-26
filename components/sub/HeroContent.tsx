// components/sub//HeroContent.tsx

"use client";


import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

const HeroContent = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle extra content

  const handleToggleMore = () => {
    setShowMore(!showMore); // Toggle visibility of the additional content
  };

  return (
  
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
          {/* Place SocialIcons component at the top of the HeroContent 
          // This will now only show on small screens due to the 'md:hidden' class
          */}
          <SocialIcons />  

            <motion.div
              variants ={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
              >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                <h1 className="Welcome-text text-[13px]"> 
                Fullstack Developer Portfolio
                </h1>
                
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Provinding
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> 
                  {" "}
                  the best 
                  {" "}
                </span>
                Project experience
              </span>
            </motion.div>

            <motion.p
            
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              I&apos;m a Full Stack Software Engineer with exprience in website,
              Mobile, and Software development. 
              Check out my projects and skills.
      
            </motion.p>


            <motion.div
              variants={slideInFromLeft(1)}
              onClick={handleToggleMore}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Learn More!
            </motion.div>

            {showMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 my-5 max-w-[600px] "
              >
                <p>Here you can find deeper insights into my professional skills and experiences: </p>
                <a href="https://github.com/ims13" className="text-blue-500 hover:underline"> - GitHub</a><br />
                <a href="https://www.linkedin.com/in/idriss-l-a0361a205/" className="text-blue-500 hover:underline"> - LinkedIn</a>
              </motion.div>
            )}
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
           className="w-full h-full flex justify-center items-center"
         >
          <Image 
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />

        </motion.div>
    </motion.div>
  );
}

export default HeroContent;
