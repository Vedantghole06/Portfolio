import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for tooltips if needed later
import { FaReact, FaNodeJs, FaCode, FaGraduationCap, FaBriefcase, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from 'react-icons/si';
import { FaCss3, FaGithub } from 'react-icons/fa6';

// --- IMPORT YOUR ASSETS ---
import VedantPhoto from '../assets/vedant-photo.jpg'; // Make sure this path is correct
import FloatingIcons from '../components/FloatingIcons'; // Import the floating icons

// --- DATA (Keep your updated skills) ---
const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, level: 'Advanced' }, // Slightly adjusted color
    { name: 'CSS', icon: <FaCss3 className="text-blue-600" />, level: 'Advanced' }, // Slightly adjusted color
    { name: 'React', icon: <FaReact className="text-sky-500" />, level: 'Advanced' }, // Slightly adjusted color
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermediate' },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700" />, level: 'Intermediate' }, // Adjusted color
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 'Advanced' }, // Slightly adjusted color
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 'Intermediate' },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" />, level: 'Advanced' }, // Slightly adjusted color
    { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, level: 'Advanced' }, // Adjusted color
    // Add more skills...
];

const timelineData = [
    { year: '2020', title: 'Started Learning Web Dev', icon: <FaCode />, description: 'Began my journey into HTML, CSS, and JavaScript.' },
    { year: '2021', title: 'Dived into React & Node', icon: <FaReact />, description: 'Focused on frontend frameworks and backend basics.' },
    { year: '2022', title: 'First Fullstack Project', icon: <FaBriefcase />, description: 'Built and deployed my first MERN stack application.' },
    { year: '2023', title: 'Graduation / Freelance', icon: <FaGraduationCap />, description: 'Completed studies and started taking on freelance projects.' },
    // Add more milestones
];

// --- Variants for Animations ---
const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const tooltipVariants = {
    hidden: { opacity: 0, y: 5, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};


const AboutPage = () => {
    return (
        <div className="min-h-screen container mx-auto px-4 py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Floating Icons Background */}
            <FloatingIcons count={6} /> {/* Fewer icons for a subtler effect */}

            <motion.h2
                className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-text-primary relative z-10" // Ensure heading is above background
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Meet Vedant
            </motion.h2>

            {/* Bio Section with Photo & Glassmorphism */}
            <motion.section
                className="max-w-4xl mx-auto mb-20 md:mb-24 relative z-10" // Ensure section content is above background
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="bg-card-bg backdrop-blur-lg rounded-xl shadow-soft border border-white/30 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Photo */}
                    <motion.div
                        className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={VedantPhoto}
                            alt="Vedant"
                            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        {/* Optional Subtle Glow */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300 shadow-glow-blue animate-pulse group-hover:animate-none pointer-events-none"></div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div variants={itemVariants}>
                        <motion.p
                            className="text-base md:text-lg text-text-secondary mb-4 leading-relaxed"
                            variants={itemVariants} // Inherits timing from parent stagger
                        >
                            Hi there! I'm Vedant, a passionate Full Stack Developer based in Nagpur, India, with a love for creating clean, efficient, and engaging web experiences. My journey in tech started with a curiosity for how websites worked, and it quickly evolved into a full-blown passion for coding and problem-solving.
                        </motion.p>
                        <motion.p
                            className="text-base md:text-lg text-text-secondary leading-relaxed"
                            variants={itemVariants} // Inherits timing from parent stagger
                        >
                            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern frontend tools like Tailwind CSS. I thrive on turning complex ideas into simple, beautiful, and intuitive applications. Let's build something amazing together!
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Subtle Divider */}
            <hr className="my-16 md:my-20 border-primary/20 max-w-lg mx-auto" />

            {/* Skills Section */}
            <motion.section
                className="mb-20 md:mb-24 relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h3
                    className="text-3xl font-heading font-semibold text-center text-text-primary mb-10"
                    variants={itemVariants}
                >
                    My Tech Stack
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative group" // Group for tooltip positioning
                            variants={itemVariants} // Staggered animation from parent section
                        >
                            <motion.div
                                className="bg-white/80 shadow-soft rounded-lg px-5 py-3 flex items-center space-x-3 border border-transparent hover:border-primary/50 cursor-pointer"
                                whileHover={{
                                    y: -6,
                                    scale: 1.08,
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)', // Enhanced shadow on hover
                                    transition: { type: 'spring', stiffness: 300, damping: 15 }
                                }}
                            >
                                <span className="text-3xl flex-shrink-0">{skill.icon}</span>
                                <span className="text-text-primary font-medium text-sm md:text-base">{skill.name}</span>

                                {/* Animated Tooltip */}
                                {/* <AnimatePresence>
                                    <motion.span
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none z-20"
                                        initial="hidden"
                                        animate={"visible"} 
                                        exit="hidden"
                                        variants={tooltipVariants}
                                    >
                                        {skill.level}
                                    </motion.span>
                                </AnimatePresence> */}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Subtle Divider */}
            <hr className="my-16 md:my-20 border-primary/20 max-w-lg mx-auto" />

            {/* Dev Journey Timeline */}
            <motion.section
                className="relative z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
            >
                <motion.h3
                    className="text-3xl font-heading font-semibold text-center text-text-primary mb-12"
                    variants={itemVariants}
                >
                    My Journey
                </motion.h3>
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Gradient Line */}
                    <div className="absolute left-1/2 top-2 bottom-2 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 transform -translate-x-1/2 rounded-full"></div>

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`mb-10 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse justify-end' : 'justify-start'}`}
                            // Custom variant for timeline items if needed, or use itemVariants
                            initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            {/* Timeline Content Card */}
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8 md:pl-10' : 'pr-8 md:pr-10 text-right'}`}>
                                <div className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-lg shadow-soft border border-gray-200/50 transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md">
                                    <p className="font-semibold text-primary mb-1 text-sm md:text-base">{item.year}</p>
                                    <h4 className="font-heading text-base md:text-lg text-text-primary mb-1">{item.title}</h4>
                                    <p className="text-xs md:text-sm text-text-secondary">{item.description}</p>
                                </div>
                            </div>

                            {/* Animated Dot on the timeline */}
                            <motion.div
                                className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
                            >
                                <div className="bg-white border-4 border-primary rounded-full w-10 h-10 flex items-center justify-center text-primary text-xl shadow-md">
                                    {item.icon}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

        </div>
    );
};

export default AboutPage;