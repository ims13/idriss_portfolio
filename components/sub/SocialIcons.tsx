// components/sub/SocialIcons.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-3 mt-2 md:hidden">
      {Socials.map((social) => (
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
      ))}
    </div>
  );
};

export default SocialIcons;
