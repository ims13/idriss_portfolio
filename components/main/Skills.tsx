// components/main/Skills.tsx
"use client";

import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20'
    style={{transform: "scale(0.9)"}}
    >
        <SkillText />
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 item-center" style={{ zIndex: 30 }}>
            {Skill_data.map((image, index) =>(
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}   
                />

            ))}

        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 item-center">
            {Frontend_skill.map((image, index) =>(
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                
                />

            ))}

        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 item-center">
            {Backend_skill.map((image, index) =>(
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                
                />

            ))}

        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 item-center">
            {Full_stack.map((image, index) =>(
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                
                />

            ))}

        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 item-center">
            {Other_skill.map((image, index) =>(
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                
                />

            ))}

        </div>

        <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video
                    className="w-full h-auto"
                    preload="false"
                    playsInline
                    loop
                    muted
                    autoPlay
                    >
                     {/* // <source src='/cards-video.webm' type='video/webm' /> */}
                      <source src='/cards-video.mp4' type='video/mp4' /> {/* Fallback for devices that don't support webm  Your browser does not support the video tag.*/}
                     
                </video>

            </div>

        </div>

    </section>
  )
}

export default Skills
