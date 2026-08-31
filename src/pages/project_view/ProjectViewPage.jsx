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
    console.log(data)

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

                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.tagline}>{data.tagline}</p>
                    <p className={styles.role}>{data.role}</p>
                    

                    <div className={styles.link_wrap}>
                        URL: <a href="" target='_blank' className={styles.link}> {data.serviceUrl}</a>
                    </div>
                    {
                        data.adminUrl && 
                        (
                            <div className={styles.link_wrap}>
                                AdminURL: <a href="" target='_blank' className={styles.link}> {data.adminUrl}</a>
                            </div>
                        )
                    }
                    <div className={styles.link_wrap}>
                        GitHub: <a href="" target='_blank' className={styles.link}> {data.githubUrl}</a>
                    </div>

                    <h3 className={styles.subject}></h3>
                </nav>
            </main>
        </motion.div>
    );
};

export default ProjectViewPage;