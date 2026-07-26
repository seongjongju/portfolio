import React, { useEffect, useRef, useState } from 'react';
import { useActiveSection } from 'src/context/SectionContext';

const useSectionRef = (id) => {
    const {setActiveSection } = useActiveSection();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            },
            { 
                threshold: 0,
                rootMargin: "-20% 0px -70% 0px" 
            } 
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [id, setActiveSection]);

    return {
        setActiveSection,
        sectionRef
    };
};

export default useSectionRef;