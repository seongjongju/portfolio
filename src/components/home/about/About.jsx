import React, { useRef } from 'react';
import styles from '../../../assets/styled/home/about.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';

const About = () => {
    const id = "section_0";
    const {setActiveSection, sectionRef} = useSectionRef(id);

    return (
        <section 
            id={id} 
            className={styles.section}
            ref={sectionRef}
        >
            
        </section>
    );
};

export default About;