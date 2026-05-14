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
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
    <div className="relative rounded-lg shadow-lg border border-[#2A0E61] z-[30] flex flex-col w-[350px] md:w-[400px] xl:w-[450px] h-[600px] hover:border-purple-500/60 hover:shadow-purple-900/30 transition-all duration-300">

        {/* Image — fixed height */}
        <div className="relative w-full h-[200px] shrink-0 overflow-hidden rounded-t-lg">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0300145e]" />
        </div>

        {/* Content — fills remaining space, inner text scrollable */}
        <div className="flex flex-col flex-1 min-h-0 p-4 gap-2">
          <h1 className="text-lg font-semibold text-white leading-snug shrink-0">{title}</h1>

          {/* Scrollable description */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-700/50 scrollbar-track-transparent">
            <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
          </div>

          {/* Tech stack — always visible at bottom */}
          <div className="shrink-0 pt-2 border-t border-white/10">
            <p className="text-xs text-purple-400/80 leading-relaxed">{techStack}</p>
          </div>
        </div>

    </div>
    </a>
  )
}

export default ProjectCard
