import React from 'react';
import styles from 'src/assets/styled/project_view.module.css';
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';
import {viewData} from 'src/shared/data/viewData';
import ViewHero from 'src/components/project_view/layout/ViewHero';

const ProjectViewPage = () => {
    const {id} = useParams();

    //id가 일치하는 데이터만
    const data = viewData.filter(view => view.id === id)[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <main id={styles.main}>
                <nav className={styles.nav}>
                     <ViewHero
                        src={data.src}
                     />

                     <h2>{data.title}</h2>
                     <p>{data.tagline}</p>
                     <p>{data.role}</p>
                     <a href="" target='_blank'>URL: {data.serviceUrl}</a>
                     <a href="" target='_blank'>AdminURL: {data.adminUrl}</a>
                     <a href="" target='_blank'>GitURL: {data.githubUrl}</a>

                    
                </nav>
            </main>
        </motion.div>
    );
};

export default ProjectViewPage;