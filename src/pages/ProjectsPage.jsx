import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';


const allProjects = [
    {
        id: 1,
        title: "My Portfolio Template",
        description: "The very portfolio you are looking at! Built with React, Tailwind CSS, and Framer Motion.",
        imageUrl: "./portfolio.png",
        techStack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
        liveUrl: "https://vedant-portfolio-chi.vercel.app/", // Link to live demo if applicable
        repoUrl: "https://github.com/Vedantghole06/Portfolio", // <<<--- Add GitHub link
        category: 'React'
    },
    {
        id: 2,
        title: "E-commerce Platform ",
        description: "A RESTful API for an online store including product management, user auth, and orders.",
        imageUrl: "./ecommerce.png", // <<<--- Add path to your preview image
        techStack: ["React", "Node.js", "Express", "MongoDB", "API", "JWT"],
        liveUrl: "https://ecom-sv-frontend.vercel.app/", // No live demo for API usually
        repoUrl: "https://github.com/Vedantghole06/ecommerce-website", // <<<--- Add GitHub link
        category: 'Fullstack'
    },
    {
        id: 3,
        title: "Fraud Hunter",
        description: "A Authentication app built with Html, Css & Javascript.",
        imageUrl: "./fraud.png", // <<<--- Add path to your preview image
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://fraud-hunter.vercel.app/",
        repoUrl: "https://github.com/yourusername/task-manager", // <<<--- Add GitHub link
        category: 'Frontend'
    },
    {
        id: 4,
        title: "WildSouls Safaries",
        description: "A WildLife Safaries Booking Website.",
        imageUrl: "./wildsoul.png", // <<<--- Add path to your preview image
        techStack: ["React", "Node.js", "Express", "MongoDB", "API"],
        liveUrl: "https://wildsoulsafaris.vercel.app/",
        repoUrl: null, // <<<--- Add GitHub link
        category: 'Fullstack'
    },
    {
        id: 5,
        title: "Invoice Generator",
        description: "A Invoice Generator that generates invoices in seconds.",
        imageUrl: "./invoice.png", // <<<--- Add path to your preview image
        techStack: ["React", "Tailwind Css"],
        liveUrl: "https://invoicegenerator06.netlify.app/",
        repoUrl: "https://github.com/Vedantghole06/Invoice_generator", // <<<--- Add GitHub link
        category: 'React'
    },
    {
        id: 6,
        title: "TARS Technologies",
        description: "A Tars Consultancy Website",
        imageUrl: "./tars.png", // <<<--- Add path to your preview image
        techStack: ["React", "Node.js", "Express", "MongoDB", "API", "JWT"],
        liveUrl: "https://tarstech.in/",
        repoUrl: null, // <<<--- Add GitHub link
        category: 'Fullstack'
    },
    {
        id: 7,
        title: "Copy Cat AI",
        description: "An analytics dashboard for social media platforms.",
        imageUrl: "./copycat.png", // <<<--- Add path to your preview image
        techStack: ["Next", "Tailwind CSS", "OpenAI API", "JavaScript"],
        liveUrl: "https://copy-cat-omega.vercel.app/",
        repoUrl: "https://github.com/Vedantghole06/CopyCat", // <<<--- Add GitHub link
        category: 'Fullstack'
    },
    {
        id: 8,
        title: "Blue Ladder",
        description: "BlueLadder EPC is a global enterprise that specializes in providing solutions for Pre-engineered Buildings and Steel Structures.",
        imageUrl: "./blue-ladder.png", // <<<--- Add path to your preview image
        techStack: ["React", "Tailwind CSS"],
        liveUrl: "https://blue-ladder.vercel.app/",
        repoUrl: null, // <<<--- Add GitHub link
        category: 'React'
    },

];

// Get unique categories for filtering
const categories = ['All', ...new Set(allProjects.map(p => p.category))];

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Stagger animation for each card
            },
        },
    };

    return (
        <div className="min-h-screen container mx-auto px-4 py-24 md:py-32">
            <motion.h2
                className="text-4xl md:text-5xl font-bold font-heading text-center mb-6 text-text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Crafted Code
            </motion.h2>
            <motion.p
                className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Here are some of the projects I've worked on. Filter them by category.
            </motion.p>

            {/* Filter Bar */}
            <motion.div
                className="flex justify-center flex-wrap gap-3 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${filter === category
                            ? 'bg-primary text-black shadow-md'
                            : 'bg-white/70 text-text-secondary hover:bg-primary/10 hover:text-primary'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                variants={containerVariants}
                initial="hidden"
                animate="show" // Use animate here to trigger stagger
            >
                {filteredProjects.map((project) => (
                    // ProjectCard already has its own entry animation triggered by whileInView
                    <ProjectCard key={project.id} {...project} />
                ))}
            </motion.div>

            {filteredProjects.length === 0 && (
                <p className="text-center text-text-secondary mt-12">No projects found for this category yet!</p>
            )}
        </div>
    );
};

export default ProjectsPage;
