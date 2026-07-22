import React from 'react';
import styles from 'src/assets/styled/about/about.module.css';
import Subject from 'src/shared/components/UI/Subject';

const Experience = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Subject 
                    subject={<>EXPERIENCE & EDUCATION</>}
                />
                <div>
                    
                </div>
            </nav>
        </section>
    );
};

export default Experience;