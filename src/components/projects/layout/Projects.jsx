import React, { useEffect, useRef, useState } from 'react';
import useSectionRef from 'src/hooks/useSectionRef';
import styles from 'src/assets/styled/projects.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { projectDatas } from 'src/shared/data/staticData';
import ProjectPopup from './ProjectPopup';

const Projects = () => {
    const id = 'projects';
    const {sectionRef} = useSectionRef(id);
    const [total, setTotal] = useState(0); //전체 슬라이드
    const [current, setCurrent] = useState(1); //현재 슬라이드

    const swiperRef = useRef(null);

    useEffect(() => {
        if(!swiperRef.current) return;
        const slideLength = sectionRef.current.querySelectorAll('.swiper-slide').length;

        setTotal(slideLength);
    }, []);

    return (
        <main 
            id={id} 
            className={styles.main}
            ref={sectionRef}
        >
            <section className={styles.section}>
                <div className={styles.swiper_wrap}>
                    <Swiper
                        ref={swiperRef}
                        className={styles.swiper}
                        slidesPerView={1}
                        modules={[EffectFade, Navigation, Autoplay]} 
                        effect="fade"
                        navigation={{
                            nextEl: '.navi .swiper-button-next',
                            prevEl: '.navi .swiper-button-prev'
                        }}
                        autoplay={{ 
                            delay: 3000, 
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
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

                                        <button className={styles.view}>
                                            View
                                            <div className={styles.arrows}>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </button>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className='navi'>
                        <button className='swiper-button-prev'>◀</button>
                            <div className='navi__counter'>
                                <span className='navi__current'>{current}</span>
                                <span>-</span>
                                <span className='navi__total'>{total}</span>
                            </div>
                        <button className='swiper-button-next'>▶</button>
                    </div>
                </div>
            </section>

            <ProjectPopup />
        </main>
    );
};

export default Projects;