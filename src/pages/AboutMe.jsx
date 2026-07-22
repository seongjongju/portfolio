import React from 'react';
import styles from 'src/assets/styled/about/about.module.css';
import CoreStack from 'src/components/about/layout/CoreStack';
import Experience from 'src/components/about/layout/Experience';
import MyInfo from 'src/components/about/layout/MyInfo';

const AboutMe = () => {
    return (
        <main className={styles.main}>
            <MyInfo />
            {/* <CoreStack /> */}
            <Experience />
        </main>
    );
};

export default AboutMe;