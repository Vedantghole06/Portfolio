import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiPython, SiNextdotjs, SiHtml5, SiGithub } from "react-icons/si";

// Define your skills with icons
const skills = [
    { icon: <FaReact size={40} className="text-blue-500" />, name: 'React' },
    { icon: <SiNextdotjs size={40} className="text-black" />, name: 'Next.js' },
    { icon: <FaNodeJs size={40} className="text-green-500" />, name: 'Node.js' },
    { icon: <SiMongodb size={40} className="text-green-600" />, name: 'MongoDB' },
    { icon: <SiTailwindcss size={40} className="text-teal-500" />, name: 'Tailwind' },
    { icon: <SiExpress size={40} className="text-gray-600" />, name: 'Express' },
    { icon: <FaJsSquare size={40} className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiTypescript size={35} className="text-blue-600" />, name: 'TypeScript' },
    { icon: <FaGitAlt size={40} className="text-purple-600" />, name: 'Git' },
    { icon: <SiGithub size={40} className="text-purple-600" />, name: 'GitHub' },
    { icon: <FaCss3 size={40} className="text-blue-600" />, name: 'Css' },
    { icon: <SiHtml5 size={40} className="text-orange-600" />, name: 'Html' },
    { icon: <SiPython size={40} className="text-yellow-600" />, name: 'Python' },
];

// Function to generate random positions and animation properties
const generateRandomProps = (index, areaWidth, areaHeight) => {
    const duration = Math.random() * 10 + 15; // Random duration between 15-25 seconds
    const delay = 2;         // Random delay up to 5 seconds
    const xStart = Math.random() * areaWidth;
    const yStart = Math.random() * areaHeight;
    const xEnd = Math.random() * areaWidth;
    const yEnd = Math.random() * areaHeight;
    const rotationStart = Math.random() * 60 - 30; // -30 to +30 deg
    const rotationEnd = Math.random() * 60 - 30;

    return {
        initial: {
            x: xStart,
            y: yStart,
            rotate: rotationStart,
            opacity: 0, // Start invisible
            scale: Math.random() * 0.3 + 0.7 // Random size between 0.7 and 1.0
        },
        animate: {
            x: [xStart, Math.random() * areaWidth, xEnd], // Add intermediate points for non-linear path
            y: [yStart, Math.random() * areaHeight, yEnd],
            rotate: [rotationStart, Math.random() * 60 - 30, rotationEnd],
            opacity: [0, 0.6, 0.6, 0], // Fade in, stay, fade out
            scale: [0.7, Math.random() * 0.3 + 0.8, 0.7], // Slight pulsing
            transition: {
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop", // 'loop' restarts the animation from initial
                ease: "easeInOut", // Smoother movement
            }
        },
    };
};


const FloatingIcons = ({ count = 13 }) => { // Control how many icons float
    // These should ideally be dynamic based on screen size, but fixed for example
    const areaWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const areaHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

    // Ensure we don't request more icons than available skills
    const numIconsToRender = Math.min(count, skills.length);

    // Select a subset of skills randomly or sequentially
    const iconsToRender = skills.slice(0, numIconsToRender);

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
            {iconsToRender.map((skill, index) => {
                const props = generateRandomProps(index, areaWidth, areaHeight);
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        initial={props.initial}
                        animate={props.animate}
                    // style={{ originX: 0.5, originY: 0.5 }} // Ensure rotation is centered
                    >
                        {skill.icon}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FloatingIcons;