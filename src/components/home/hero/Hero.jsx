import React from 'react';
import styles from '../../../assets/styled/home/hero.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';

const Hero = () => {
    const id = "hero";
    const {setActiveSection, sectionRef} = useSectionRef(id);
    return (
        <section 
            id={id}
            className={styles.hero}
            ref={sectionRef}
        >
            
        </section>
    );
};

export default Hero;