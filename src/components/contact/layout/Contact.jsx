import React from 'react';
import styles from 'src/assets/styled/contact.module.css';
import ContactLink from '../UI/ContactLink';

const Contact = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <h2 className={styles.title}>
                    LET'S WORK
                    <span>TOGETHER</span>
                </h2>

                <div className={styles.layout}>
                    <div className={styles.contact}>
                        <h5 className={styles.subject}>EMAIL</h5>
                        <a href="mailto:sjj990480@gmail.com" className={styles.email}>
                            sjj990480@gmail.com
                        </a>
                        <h5 className={styles.subject}>TEL</h5>
                        <a href='tel:010-8690-3363' className={styles.tel}>010-8690-3363</a>
                    </div>
                    {/* contact */}
                    <div className={styles.links}>
                        <ContactLink 
                            link="#self"
                            platform="GitHub"
                            icon={
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#666" 
                                    className={styles.icon}
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                                    />
                                </svg>
                            }
                        />
                        <ContactLink 
                            link="#self"
                            platform="Resume"
                            icon={
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="#666" 
                                    className={styles.icon}
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                                    />
                                </svg>
                            }
                        />
                    </div>
                    {/* links */}
                </div>
                {/* layout */}
            </nav>
        </section>
    );
};

export default Contact;