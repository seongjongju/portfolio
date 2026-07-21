import React from 'react';
import styles from 'src/assets/styled/home/about.module.css';
import CoreStack from 'src/components/about/layout/CoreStack';
import Experience from 'src/components/about/layout/Experience';
import MyInfo from 'src/components/about/layout/MyInfo';
import Subject from 'src/shared/components/UI/Subject';
import Title from 'src/shared/components/UI/Title';

const AboutMe = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Title 
                        title={<>ABOUT ME</>}
                    />

                    <MyInfo />
                </nav>
            </section>

            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Subject 
                        subject={<>CORE STACK</>}
                    />

                    <CoreStack />
                </nav>
            </section>

            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Subject 
                        subject={<>EXPERIENCE & EDUCATION</>}
                    />

                    <Experience />
                </nav>
            </section>
        </main>
    );
};

export default AboutMe;