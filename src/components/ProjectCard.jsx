// import React from 'react';
// import { motion } from 'framer-motion';
// import Button from './Button';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// // Helper to get color class based on tech name (customize as needed)
// const getTechColor = (tech) => {
//     switch (tech.toLowerCase()) {
//         case 'react':
//         case 'next.js':
//             return 'bg-blue-100 text-blue-800';
//         case 'node.js':
//         case 'express':
//             return 'bg-green-100 text-green-800';
//         case 'mongodb':
//             return 'bg-emerald-100 text-emerald-800';
//         case 'tailwind css':
//             return 'bg-teal-100 text-teal-800';
//         case 'javascript':
//             return 'bg-yellow-100 text-yellow-800';
//         case 'typescript':
//             return 'bg-sky-100 text-sky-800';
//         case 'api':
//             return 'bg-purple-100 text-purple-800';
//         default:
//             return 'bg-gray-100 text-gray-800';
//     }
// };

// const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, repoUrl }) => {
//     return (
//         <motion.div
//             className="bg-card-bg backdrop-blur-sm rounded-xl overflow-hidden shadow-soft border border-white/20 p-5 flex flex-col"
//             whileHover={{ y: -8, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
//             transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//             <img
//                 src={imageUrl || "https://via.placeholder.com/400x250?text=Project+Preview"} // Placeholder
//                 alt={`${title} preview`}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//                 loading="lazy" // Lazy load images
//             />
//             <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">{title}</h3>
//             <p className="text-text-secondary text-sm mb-4 flex-grow">{description}</p>

//             <div className="mb-4">
//                 <p className="text-sm font-medium text-text-primary mb-2">Tech Stack:</p>
//                 <div className="flex flex-wrap gap-2">
//                     {techStack.map((tech, index) => (
//                         <span
//                             key={index}
//                             className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTechColor(tech)}`}
//                         >
//                             {tech}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             <div className="flex justify-start space-x-3 mt-auto pt-4 border-t border-gray-200/50">
//                 {liveUrl && (
//                     <Button href={liveUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="text-sm px-4 py-2">
//                         <FaExternalLinkAlt className="inline mr-1 mb-0.5" /> Live Demo
//                     </Button>
//                 )}
//                 {repoUrl && (
//                     <Button href={repoUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="text-sm px-4 py-2">
//                         <FaGithub className="inline mr-1 mb-0.5" /> GitHub Repo
//                     </Button>
//                 )}
//             </div>
//         </motion.div>
//     );
// };

// export default ProjectCard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Helper to get color class based on tech name with more vibrant colors
const getTechColor = (tech) => {
    switch (tech.toLowerCase()) {
        case 'react':
            return 'bg-blue-100 text-blue-800 border border-blue-200';
        case 'next.js':
            return 'bg-black text-white border border-gray-700';
        case 'node.js':
        case 'express':
            return 'bg-green-100 text-green-800 border border-green-200';
        case 'mongodb':
            return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
        case 'tailwind css':
            return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
        case 'javascript':
            return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        case 'typescript':
            return 'bg-blue-100 text-blue-800 border border-blue-200';
        case 'api':
            return 'bg-purple-100 text-purple-800 border border-purple-200';
        case 'python':
            return 'bg-blue-100 text-blue-900 border border-blue-200';
        case 'graphql':
            return 'bg-pink-100 text-pink-800 border border-pink-200';
        case 'firebase':
            return 'bg-amber-100 text-amber-800 border border-amber-200';
        default:
            return 'bg-slate-100 text-slate-800 border border-slate-200';
    }
};

const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, repoUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Card container variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };

    // Image variants
    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    // Button variants
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="bg-gradient-to-br from-card-bg/90 to-card-bg/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Image container with gradient overlay */}
            <div className="relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: isHovered ? 0.6 : 0.4 }}
                />

                <motion.img
                    variants={imageVariants}
                    src={imageUrl || "https://via.placeholder.com/400x250?text=Project+Preview"}
                    alt={`${title} preview`}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                />

                {/* Project title overlay on image */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 z-20"
                    initial={{ y: 10, opacity: 0.8 }}
                    animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
                >
                    <h3 className="text-xl font-heading font-bold text-white drop-shadow-md">{title}</h3>
                </motion.div>
            </div>

            {/* Content section */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-text-secondary text-sm mb-5 flex-grow leading-relaxed">{description}</p>

                <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={index}
                                className={`text-xs font-medium px-2.5 py-1 rounded-full ${getTechColor(tech)} shadow-sm`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-evenly space-x-3 mt-auto pt-4 border-t border-gray-700/20">
                    {liveUrl && (
                        <motion.div variants={buttonVariants}>
                            <Button
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                className="text-sm px-4 py-2 font-medium rounded-lg flex items-center space-x-2 transition-all"
                            >
                                <FaExternalLinkAlt className="mr-1" />
                                <span>Live Demo</span>
                            </Button>
                        </motion.div>
                    )}
                    {repoUrl && (
                        <motion.div variants={buttonVariants}>
                            <Button
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline"
                                className="text-sm px-4 py-2 font-medium rounded-lg flex items-center space-x-2 border-white/20 hover:bg-white/10 transition-all"
                            >
                                <FaGithub className="mr-1" />
                                <span>GitHub</span>
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;