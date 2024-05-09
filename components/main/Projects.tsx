// components/main/Project.js

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20"
         id="projects"
    >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        

        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pt-5 cursor-pointer">
          <ProjectCard 
            src="/meseum.png"
            title="Space Themed Website Inspired by the Metropolitan Museum"
            description="This website draws inspiration from the vast and eclectic art collections of the Metropolitan Museum of Art, 
            one of the largest and most revered art museums globally. Our design echoes the Met's dedication 
            to cultural richness, featuring elements that are reminiscent of the museum's grandeur and diversity."
            techStack="Next.js, React, Bootstrap, SWR, Jotai"
            link=" "  // Link to the deployed project or detail page
            />

        <ProjectCard 
          src="/rentUs.png"
          title="Rent With Us - Simplifying Toronto's Housing Search"
          description="Developed for the Seneca Hackathon 2024, 'Rent With Us' is a pioneering solution to Toronto's pressing housing needs. 
          This platform empowers room seekers and house renters to find their ideal accommodations with ease, 
          leveraging advanced AI for intelligent search functionalities."
          techStack="Figma, Relume, AI-powered search"
          link="https://www.figma.com/file/EHxnnjuuUADVWTtI9QHgMp/Relume-(Community)?type=design&node-id=97%3A2334&mode=design&t=oS7HpNsb2bmt3fAl-1"  // Link to the deployed project or detail page
        />

        <ProjectCard
          src="/card_met.png"
          title="Artistic Exploration: Themed Website Inspired by The Met"
          description="Inspired by the eclectic art collections of the Metropolitan Museum of Art, this website combines the historical 
          grandeur of classical art with modern digital aesthetics. Each design element reflects a fusion of ancient artistry and contemporary 
          technology, creating a user experience that is both educational and visually captivating. "
          techStack="Next.js, React, Bootstrap, SWR, Jotai"
          link=" "  // Link to the deployed project or detail page
        />

        </div>

    </div>
  )
}

export default Projects
