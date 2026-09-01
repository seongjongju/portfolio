import React, { useEffect, useRef, useState } from 'react';
import useSectionRef from 'src/hooks/useSectionRef';
import styles from 'src/assets/styled/projects.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import useGsapAnimation from 'src/hooks/useGsapAnimation';
import Title from 'src/shared/components/UI/Title';
import { projectDatas } from 'src/shared/data/staticData';


const Projects = () => {
    const id = 'projects';
    const {sectionRef} = useSectionRef(id);
    const {projectOneRef, projectTwoRef, projectThreeRef, projectfourRef, projectfiveRef} = useGsapAnimation();

    return (
        <main 
            id={id} 
            className={styles.main}
            ref={sectionRef}
        >
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Title 
                        title="Projects"
                    />
                </nav>

                <Swiper
                    className={styles.swiper}
                    slidesPerView={1}
                    modules={[EffectFade]} 
                    effect="fade"
                >
                    {
                        projectDatas.map((project) => {
                            console.log(project)
                            return(
                                <SwiperSlide
                                    className={styles.swiper_slide}
                                >
                                    <div className={styles.box}>
                                        <Splide
                                            className={styles.splide}
                                            extensions={{ AutoScroll }}
                                            options={{
                                                type     : 'loop',
                                                drag     : false,
                                                focus    : 'center',
                                                perPage  : 1,
                                                autoWidth: true,
                                                gap      : '100px',
                                                pagination: false,
                                                arrows   : false,
                                                autoScroll: {
                                                    speed       : 1.5,
                                                    pauseOnHover: false,
                                                },
                                                breakpoints: {
                                                    768: {
                                                        autoScroll: {
                                                            speed : 1.2,
                                                        },
                                                    },
                                                    600: {
                                                        gap : '50px',
                                                    },
                                                    380: {
                                                        autoScroll: {
                                                            speed : 1,
                                                        },
                                                    },
                                                },
                                            }}
                                        >
                                            <SplideSlide className={styles.slide}>
                                                {project.projectName}
                                            </SplideSlide>
                                            {
                                                project.badges.map((badge) => (
                                                    <SplideSlide className={styles.slide}>
                                                        {badge}
                                                    </SplideSlide>
                                                ))
                                            }
                                        </Splide>
                                        <figure className={styles.figure}>
                                            <img src={project.img} alt={project.projectName} />
                                        </figure>
                                    </div>
                                    
                                    <p className={styles.project_name}>{project.projectName}</p>
                                    <p className={styles.ex}>{project.ex}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </main>
    );
};

export default Projects;