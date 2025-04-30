import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import FloatingIcons from '../components/FloatingIcons'; // Reuse floating icons

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Replace with your form handling logic (e.g., Formspree, Netlify Forms, Backend API)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // --- EXAMPLE: Using Formspree ---
        // 1. Create a form on formspree.io
        // 2. Replace 'YOUR_FORM_ID' with your actual Formspree form ID
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('An error occurred. Please try again.');
        }
        // --- End Formspree Example ---

        // Simple placeholder status
        // setTimeout(() => {
        //     setStatus('Message sent successfully! (Demo)');
        //     // setFormData({ name: '', email: '', message: '' }); // Clear form
        // }, 1500);
    };


    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Vedantghole06' }, // <<<--- Add your links
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/vedant-ghole' },
        { name: 'Twitter', icon: <FaTwitter />, url: 'https://x.com/VedantGhole' },
        { name: 'Email', icon: <FaEnvelope />, url: 'mailto:vedant.ghole06@gmail.com' }, // <<<--- Add your email
    ];

    const inputVariants = {
        focus: {
            borderColor: '#3b82f6', // primary color
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.3)',
            transition: { duration: 0.2 }
        },
        blur: {
            borderColor: '#d1d5db', // gray-300
            boxShadow: 'none',
            transition: { duration: 0.2 }
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-24 md:py-32 relative overflow-hidden">
            {/* Optional: Add floating icons or blobs in background */}
            <FloatingIcons count={8} />

            <motion.div
                className="relative z-10 max-w-4xl w-full bg-card-bg backdrop-blur-lg rounded-xl shadow-soft border border-white/30 p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 text-text-primary">
                    Let's Connect
                </h2>
                <p className="text-lg text-text-secondary text-center mb-10">
                    Have a project in mind or just want to say hi? Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Name</label>
                            <motion.input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:outline-none text-text-primary placeholder-gray-400"
                                placeholder="Your Name"
                                variants={inputVariants}
                                whileFocus="focus"
                                onBlur={e => e.target.blur()} // Trigger blur variant
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email</label>
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:outline-none text-text-primary placeholder-gray-400"
                                placeholder="your.email@example.com"
                                variants={inputVariants}
                                whileFocus="focus"
                                onBlur={e => e.target.blur()}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message</label>
                            <motion.textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:outline-none text-text-primary placeholder-gray-400 resize-none"
                                placeholder="How can I help you?"
                                variants={inputVariants}
                                whileFocus="focus"
                                onBlur={e => e.target.blur()}
                            />
                        </div>
                        <div className="text-center">
                            <Button type="submit" variant="primary" className="w-full md:w-auto">
                                Send Message
                            </Button>
                            {status && <p className="mt-4 text-sm text-center text-primary">{status}</p>}
                        </div>
                    </form>

                    {/* Social Links & Contact Info */}
                    <div className="flex flex-col justify-center items-center md:items-start space-y-6 pt-6 md:pt-0 md:pl-6 border-t md:border-t-0 md:border-l border-gray-300/50">
                        <h3 className="text-xl font-heading font-semibold text-text-primary mb-2 text-center md:text-left">Find me on</h3>
                        <div className="flex space-x-6">
                            {socialLinks.map(link => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-primary transition duration-300"
                                    title={link.name}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <span className="text-3xl">{link.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                        <div className="text-center md:text-left text-text-secondary">
                            <p className="mt-4">Or drop me an email directly at:</p>
                            <a href="mailto:vedant@example.com" className="font-medium text-primary hover:underline">
                                vedant.ghole06@gmail.com {/* <<<--- Add your email */}
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;