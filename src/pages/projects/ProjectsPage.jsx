import React from 'react';
import { motion } from "framer-motion";
import styles from 'src/assets/styled/projects.module.css';
import Project from 'src/components/projects/layout/Project';

const ProjectsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
        >
            <main className={styles.main}>
                <nav className={styles.nav}>
                    <section className={styles.projects}>
                        <Project />
                    </section>
                </nav>
            </main>
        </motion.div>
    );
};

export default ProjectsPage;