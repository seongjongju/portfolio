import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import CoreStack from 'src/components/about/layout/CoreStack';
import Experience from 'src/components/about/layout/Experience';
import MyInfo from 'src/components/about/layout/MyInfo';
import TakeClass from 'src/components/about/layout/TakeClass';
import Certifications from 'src/components/about/layout/Certifications';
import Title from 'src/shared/components/UI/Title';
import useSectionRef from 'src/hooks/useSectionRef';

const About = () => {
    const id = "about";
    const {sectionRef} = useSectionRef(id);

    return (
        <main 
            id={id}
            className={styles.main}
            ref={sectionRef}
        >
            <nav className={styles.nav}>
                <Title 
                    title="About"
                />
            </nav>
            <MyInfo />
            <CoreStack />
            <Experience />
            <TakeClass />
            <Certifications />
        </main>
    );
};

export default About;