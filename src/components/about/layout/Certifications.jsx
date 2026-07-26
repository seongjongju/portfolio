import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import Subject from 'src/shared/components/UI/Subject';
import { certifications } from 'src/shared/data/staticData';

const Certifications = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Subject 
                    subject="Certifications"
                />

                <ul className={styles.certifications}>
                    {
                        certifications.map((cer) => (
                            <li 
                                key={cer.id}
                                className={styles.certifications_li}
                            >
                                <p className={styles.certifications_text}>{cer.date}</p>
                                <span className={styles.line}></span>
                                <p className={styles.certifications_text}>{cer.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    );
};

export default Certifications;