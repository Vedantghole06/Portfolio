import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import FloatingIcons from '../components/FloatingIcons';
import VedantPhoto from '../assets/vedant.jpeg'; // <<<--- IMPORT YOUR PHOTO HERE
import { FaArrowDown } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Floating Icons in Background */}
      <FloatingIcons count={12} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10" // Ensure content is above icons
      >
        {/* Vedant's Photo */}
        <motion.div
          className="mb-8 inline-block relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={VedantPhoto} // <<<--- USE YOUR IMPORTED PHOTO
            alt="Vedant"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
          />
          {/* Glowing border effect on hover */}
          <div className="absolute inset-0 rounded-full border-4 border-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-glow-blue animate-pulse group-hover:animate-none"></div>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-text-primary mb-3">
          Hello, World.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          🧑‍💻 Building the Web, One Stack at a Time.
        </p>

        <Button href="/projects" variant="primary" className="text-lg">
          Explore My Work
        </Button>
      </motion.div>

       {/* Smooth Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 0.5 }}
         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
       >
         <FaArrowDown className="text-primary text-2xl animate-bounce-slow" />
       </motion.div>
    </div>
  );
};

export default HomePage;