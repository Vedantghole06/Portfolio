import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Google Drive resume link
    // You'll need to replace this with your actual Google Drive link
    const resumeLink = "https://drive.google.com/file/d/1XL9gmzDYPMXwh44_LUGpdk-lS2dKMoKd/view?usp=sharing";

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const linkVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };

    const navbarVariants = {
        hidden: { opacity: 0, y: -25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    // Handle resume download
    const handleResumeClick = () => {
        // Create an anchor element and use it to download the file
        const link = document.createElement('a');
        link.href = resumeLink;
        link.download = "Vedant_Ghole_Resume.pdf"; // Name the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md p-4 transition-all duration-300 ${scrolled
                ? 'bg-white/90 shadow-lg'
                : 'bg-white/60'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <NavLink
                    to="/"
                    className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Vedant Ghole
                    </motion.span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            variants={linkVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-lg font-medium transition-all duration-300 px-2 py-1 ${isActive
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                                                layoutId="underline"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </motion.div>
                    ))}
                    <motion.button
                        onClick={handleResumeClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                    >
                        <span>Resume</span>
                        <HiDownload className="text-lg" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.div
                    className="md:hidden z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiMenuAlt3 className="text-3xl" />
                        )}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl md:hidden flex flex-col items-center space-y-4 p-6 rounded-b-2xl"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * index }}
                                className="w-full"
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block w-full text-center py-3 text-lg ${isActive
                                            ? 'font-semibold text-blue-600 bg-blue-50 rounded-lg'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </motion.div>
                        ))}
                        <motion.button
                            onClick={handleResumeClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full py-3 rounded-lg font-medium shadow-md mt-2 flex items-center justify-center space-x-2"
                        >
                            <span>Download Resume</span>
                            <HiDownload className="text-lg" />
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;