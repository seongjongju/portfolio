import React, { useEffect, useRef, useState } from 'react';
import useSectionRef from 'src/hooks/useSectionRef';
import styles from 'src/assets/styled/projects.module.css';
import Project from './Project';
import useGsapAnimation from 'src/hooks/useGsapAnimation';

const Projects = () => {
    const id = 'projects';
    const {sectionRef} = useSectionRef(id);
    const {projectOneRef, projectTwoRef, projectThreeRef, projectfourRef} = useGsapAnimation();

    return (
        <main 
            id={id} 
            className={styles.main}
            ref={sectionRef}
        >
            <Project 
                projectId="coffee-order"
                ref={projectOneRef}
                title="커피 주문 웹앱"
                classname={styles.project_0}
            />
            <Project
                projectId="cine-ai"
                ref={projectTwoRef}
                title="CineAI"
                classname={styles.project_1}
            />
            <Project
                projectId="invitation"
                ref={projectThreeRef}
                title="모바일 청첩장"
                classname={styles.project_1}
            />
            <Project
                projectId="game"
                ref={projectfourRef}
                title="잔소리 피하기 게임"
                classname={styles.project_1}
            />
        </main>
    );
};

export default Projects;