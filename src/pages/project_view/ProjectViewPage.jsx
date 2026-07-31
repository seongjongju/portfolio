import React from 'react';
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
            {id}   
        </motion.div>
    );
};

export default ProjectViewPage;