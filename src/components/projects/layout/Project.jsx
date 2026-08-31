import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from 'src/assets/styled/projects.module.css';
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
    view,
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

                        <div className={styles.buttons}>
                            {
                                view !== "" &&
                                (
                                    <Link 
                                        className={styles.view_button}
                                        to={view}
                                    >
                                        VIEW MORE
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
});

export default Project;