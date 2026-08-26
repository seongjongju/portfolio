import React from 'react';
import styles from 'src/assets/styled/project_view.module.css';
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';

const ProjectViewPage = () => {
    const {id} = useParams();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main id={styles.main}>
                {id}
            </main>
        </motion.div>
    );
};

export default ProjectViewPage;