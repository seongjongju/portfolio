import React from 'react';
import styles from 'src/assets/styled/home/about.module.css';
import MyInfo from 'src/components/about/layout/MyInfo';
import Title from 'src/shared/components/UI/Title';

const AboutMe = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Title 
                        title={<>BEHIND THE <br /> CODE</>}
                    />

                    <MyInfo />
                </nav>
            </section>
        </main>
    );
};

export default AboutMe;