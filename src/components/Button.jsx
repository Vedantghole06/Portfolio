import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, target, rel, className = '', variant = 'primary' }) => {
    const baseStyle = "px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantStyles = {
        primary: "bg-primary text-white bg-blue-700 focus:ring-primary",
        secondary: "bg-secondary text-white bg-green-700 focus:ring-secondary",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary focus:ring-primary",
    };

    const Tag = href ? motion.a : motion.button;

    return (
        <Tag
            href={href}
            target={target}
            rel={rel}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)' }} // Example glow on primary
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </Tag>
    );
};

export default Button;