import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from 'src/assets/styled/projects.module.css';
import Subject from 'src/shared/components/UI/Subject';
import Title from 'src/shared/components/UI/Title';

const Project = memo(({
    projectId, 
    ref, 
    title, 
    classname, 
    img,
    ex,
    list,
    badges,
    texts,
    view,
    link,
    git
}) => {

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
                    <figure className={styles.figure}>
                        <img src={img} alt={title} className={styles.thum} />
                    </figure>
                    <div className={styles.detail}>
                        <p className={styles.ex}>{ex}</p>
                        <ul className={styles.list}>
                            {
                                list.map((li) => (
                                    <li 
                                        key={li}
                                        className={styles.list_li}
                                    >
                                        {li}
                                    </li>
                                ))
                            }
                        </ul>
                        
                        <div className={styles.badges}>
                            {
                                badges.map((badge) => (
                                    <p 
                                        key={badge}
                                        className={styles.badge}
                                    >
                                        {badge}
                                    </p>
                                ))
                            }
                        </div>

                        <p className={styles.heading}>Feature</p>
                        {
                            texts.map((text) => (
                                <p 
                                    key={text}
                                    className={styles.text}
                                >
                                    {text}
                                </p>
                            ))
                        }

                        <div className={styles.buttons}>
                            <Link 
                                className={styles.view_button}
                                to={view}
                            >
                                VIEW MORE
                            </Link>
                            <a 
                                className={styles.view_button}
                                href={link}
                                target='_blank'
                            >
                                SITE
                            </a>
                            <a 
                                className={styles.view_button}
                                href={git}
                                target='_blank'
                            >
                                GIT HUB
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
});

export default Project;