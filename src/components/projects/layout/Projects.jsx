import React, { useEffect, useRef, useState } from 'react';
import useSectionRef from 'src/hooks/useSectionRef';
import styles from 'src/assets/styled/projects.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
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
                <Swiper
                    className={styles.swiper}
                    slidesPerView={1}
                    modules={[EffectFade, Navigation]} 
                    effect="fade"
                    navigation={{
                        nextEl: '.navi .swiper-button-next',
                        prevEl: '.navi .swiper-button-prev'
                    }}
                >
                    {
                        projectDatas.map((project) => {
                            return(
                                <SwiperSlide
                                    key={project.id}
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
                                                    <SplideSlide 
                                                        key={badge}
                                                        className={styles.slide}
                                                    >
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
                    <div className='navi'>
                        <button className='swiper-button-prev'>◀</button>
                            <div className='navi__counter'>
                                <span>0</span>
                                <span>-</span>
                                <span>0</span>
                            </div>
                        <button className='swiper-button-next'>▶</button>
                    </div>
                </Swiper>
            </section>
        </main>
    );
};

export default Projects;