// components/sub/SkillDataProvider.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,  // Consider adjusting the threshold for when the animation triggers
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: index * 0.3 } },
        hover: { scale: 1.2 }, // Zoom effect on hover
    };

    const animationDelay = 0.3;

    const getLastSegment = (url: string) => {
        const segments = url.split('/');
        const lastSegment = segments.pop();
        return lastSegment ? lastSegment.replace(/\.\w+$/, '') : '';
    };

    const altText = `${getLastSegment(src)} skill image`;

    return (
        <motion.div
            ref={ref}
            role="button"
            tabIndex={0}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="cursor-pointer hover-scale z-[30]"  // Using CSS for hover effect
            style={{ display: 'inline-block' }} // Ensures the div is suitable for transformations
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={altText}
                loading="lazy"
                style={{
                    width: 'auto',        // Maintain the aspect ratio
                    height: 'auto',       // Maintain the aspect ratio
                    maxWidth: `${width}px`,  // Set a maximum width based on the passed prop
                    maxHeight: `${height}px`, // Set a maximum height based on the passed prop
                    objectFit: 'contain', // Ensure images fit within the defined size without distortion
                }}
            />
        </motion.div>
    );
};

export default SkillDataProvider;