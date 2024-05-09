// components/sub/ProjectCard.tsx

import Image from 'next/image'
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    techStack: string;
    link: string;  // Add link prop for navigation
}
  
const ProjectCard = ({ src, title, description, techStack, link } : Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full"> {/* Wrap the card content in an anchor tag */}

    {/* // Set a fixed height and use flex to manage internal spacing */}
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30] flex flex-col w-[350px] md:w-[400px] xl:w-[450px] h-[600px]">
        <Image 
         src={src}
         alt={title}
         width={1000}
         height={1000}
         className="w-full object-contain"
        />

        <div className="flex-grow p-4 flex flex-col justify-between"> {/* // Use flex-grow to fill available space */} 
           <h1 className="text-2xl font-semibold text-white">{title}</h1>
           <p className="mt-2 text-gray-300">{description}</p> 
           <p className="mt-2 text-gray-300">{techStack}</p> 
        </div>
      
    </div>
    </a>
  )
}

export default ProjectCard
