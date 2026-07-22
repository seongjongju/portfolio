import React from 'react';
import styles from 'src/assets/styled/home/hero.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import useSectionRef from 'src/hooks/useSectionRef';
import useGsapAnimation from 'src/hooks/useGsapAnimation';
import Character from 'src/shared/components/UI/Character';

const Hero = () => {
    const id = "hero";
    const {setActiveSection, sectionRef} = useSectionRef(id);
    const {heroTextRef} = useGsapAnimation();

    return (
        <section 
            id={id}
            className={styles.hero}
            ref={sectionRef}
        >
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
                    Frontend Developer
                </SplideSlide>
                <SplideSlide className={styles.slide}>
                    Seong Jong Ju
                </SplideSlide>
            </Splide>

            <Character 
                classname={styles.character}
            />
        </section>
    );
};

export default Hero;