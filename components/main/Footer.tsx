// components/main/Footer/tsx
"use client";

import React from 'react';
import {
    FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelopeSquare
} from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-4 ">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-around w-full flex-wrap">
                {/* Community Section */}
                <div className="min-w-[200px] flex flex-col items-center z-[30]">
                    <h3 className="font-bold text-lg">Community</h3>
                    <a href="https://github.com/ims13" className="flex items-center my-4 cursor-pointer" aria-label="GitHub">
                        <FaGithub aria-hidden="true" /><span className="ml-2">GitHub</span>
                    </a>
                    <a href="https://discordapp.com/users/807277768697970730" className="flex items-center my-4 cursor-pointer" aria-label="Discord">
                        <FaDiscord aria-hidden="true" /><span className="ml-2">Discord</span>
                    </a>
                </div>
                
                {/* Social Media Section */}
                <div className="min-w-[200px] flex flex-col items-center z-[30]">
                    <h3 className="font-bold text-lg">Social Media</h3>
                    <a href="https://www.linkedin.com/in/idriss-l-a0361a205/" className="flex items-center my-4 cursor-pointer" aria-label="LinkedIn">
                        <FaLinkedin aria-hidden="true" /><span className="ml-2">LinkedIn</span>
                    </a>
                    <a href="https://twitter.com/ims13" className="flex items-center my-4 cursor-pointer" aria-label="Twitter">
                        <FaTwitter aria-hidden="true" /><span className="ml-2">Twitter</span>
                    </a>
                </div>

                {/* Contact Section */}
                <div className="min-w-[200px] flex flex-col items-center z-[30]">
                    <h3 className="font-bold text-lg">Contact</h3>
                    <a href="tel:+13062270413" className="flex items-center my-4 cursor-pointer" aria-label="Call (306)-22-70413">
                        <FaPhone aria-hidden="true" /><span className="ml-2">(306)-22-70413</span>
                    </a>
                    <a href="mailto:ilufungula@myseneca.com" className="flex items-center my-4 cursor-pointer" aria-label="Email ilufungula@myseneca.com">
                        <FaEnvelopeSquare aria-hidden="true" /><span className="ml-2">ilufungula@myseneca.com</span>
                    </a>
                </div>
            </div>

           
            <div className="mt-5 text-center text-sm pt-2">
                &copy; Idriss L, last update {currentYear}
            </div>

        </div>
    </footer>
  );
}

export default Footer;
