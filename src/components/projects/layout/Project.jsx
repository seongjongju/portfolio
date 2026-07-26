import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'src/assets/styled/projects.module.css';
import Title from 'src/shared/components/UI/Title';

const Project = ({projectId, ref, title, classname}) => {

    return (
        <section
            id={projectId}
            className={`${styles.section} ${classname}`}
            ref={ref}
        >
            <nav className={styles.nav}>
                <Title 
                    title={title}
                />
                <div className={styles.project}>
                    <figure className={styles.image}>
                        <img src="" alt="" />
                    </figure>
                    <div className={styles.detail}>
                        <h6 className={styles.title}></h6>
                        <ul className={styles.list}>
                            <li className={styles.list_li}></li>
                        </ul>
                        <p className={styles.text}></p>
                        <Link to={''}>VIEW MORE</Link>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Project;