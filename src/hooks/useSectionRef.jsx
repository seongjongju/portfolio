import React, { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../context/SectionContext';

const useSectionRef = (id) => {
    const {setActiveSection } = useActiveSection();
    const sectionRef = useRef(null);

    useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            },
            { threshold: 0.4 } // 섹션이 화면에 50% 이상 보일 때 작동
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [setActiveSection]);

    return {
        setActiveSection,
    };
};

export default useSectionRef;