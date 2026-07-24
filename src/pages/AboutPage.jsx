import React from 'react';
import { motion } from "framer-motion";
import styles from 'src/assets/styled/about.module.css';
import CoreStack from 'src/components/about/layout/CoreStack';
import Experience from 'src/components/about/layout/Experience';
import MyInfo from 'src/components/about/layout/MyInfo';
import TakeClass from 'src/components/about/layout/TakeClass';

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main className={styles.main}>
                <MyInfo />
                <CoreStack />
                <Experience />
                <TakeClass />
            </main>
        </motion.div>
    );
};

export default AboutPage;