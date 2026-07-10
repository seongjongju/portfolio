import React from 'react';
import styles from '../../../assets/styled/home/contact.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';

const Contact = () => {
    const id = "section_2";
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

export default Contact;