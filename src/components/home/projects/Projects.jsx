import React from 'react';
import styles from '../../../assets/styled/home/projects.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';

const Projects = () => {
    const id = "section_1";
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

export default Projects;