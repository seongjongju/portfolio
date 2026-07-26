import React from 'react';
import { motion } from "framer-motion";
import Hero from '../components/hero/layout/Hero';
import About from '../components/about/layout/About';
import Projects from 'src/components/projects/layout/Projects';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Projects />
        </motion.div>
    );
};

export default HomePage;