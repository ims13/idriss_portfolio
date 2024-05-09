// components/main/Navbar.tsx
"use client"
import {useState} from 'react'
import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'   // For the hamburger menu


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to handle menu toggle

  const renderSocialIcons = () => (
    Socials.map((social) => (
      <a href={social.url} 
         key={social.name} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="py-2 px-4 text-white cursor-pointer"
         >
        <Image
          src={social.src}
          alt={social.name}
          height={24}
          width={24}
          className="cursor-pointer"
        />
      </a>
    ))
  );

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" 
          className="h-auto flex flex-row items-center"
          >
            <Image
             src="/IdissNav.png"
             alt="logo"
             width={70}
             height={70}
             className="cursor-pointer hover:animate-slowspin"
             />

             <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                 IDRISS L.
             </span>
        </a>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      {/* Navigation links - shown on all screens, but adjusted for small screens */}
      <div className={`md:flex items-center justify-between w-full h-auto ${isOpen ? 'flex' : 'hidden'} absolute md:relative top-[65px] md:top-0 left-0 md:left-auto w-full md:w-[500px] bg-[#03001417] md:bg-transparent backdrop-blur-md md:backdrop-blur-none flex-col md:flex-row py-5 md:py-0 transition-all duration-300 ease-in-out`}>
          <div className="flex items-center justify-between w-full h-auto border border-[#70042f861] bg-[#0300145e] md:bg-transparent md:mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="block py-2 px-4 text-white cursor-pointer">About me</a>
            <a href="#skills" className="block py-2 px-4 text-white cursor-pointer">Skills</a>
            <a href="#projects" className="block py-2 px-4 text-white cursor-pointer">Projects</a>
          </div>
          
          
             {/* Social icons now also toggle with the menu */}
          {/* <div className="flex flex-row gap-3 mt-14 md:mt-0 md:ml-auto md:gap-5">
              {renderSocialIcons()}
          </div> */}

        </div>

  
       {/* Display social icons on the right of the navbar on larger screens */}
        <div className={"hidden md:flex flex-row gap-5 "}>
        {renderSocialIcons()}
        </div>
            
      </div>
    </div>
  )
}

export default Navbar
