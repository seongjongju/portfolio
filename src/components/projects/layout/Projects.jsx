import React, { useEffect, useRef, useState } from 'react';
import useSectionRef from 'src/hooks/useSectionRef';
import styles from 'src/assets/styled/projects.module.css';
import Project from './Project';
import useGsapAnimation from 'src/hooks/useGsapAnimation';
import { projectDatas } from 'src/shared/data/staticData';


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
            {
                projectDatas.map((project) => {
                    return(
                        <Project 
                            key={project.id}
                            projectId={project.id}
                            classname={project.id === "project_0" ? "project_0" : "project_1"}
                            title={project.title}
                            ref={
                                project.id === "project_0" ? projectOneRef :
                                project.id === "project_1" ? projectTwoRef : 
                                project.id === "project_2" ? projectThreeRef :
                                projectfourRef
                            }
                            img={project.img}
                            ex={project.ex}
                            list={project.list}
                            badges={project.badges}
                            texts={project.texts}
                            link={project.link}
                        />
                    )
                })
            }
        </main>
    );
};

export default Projects;