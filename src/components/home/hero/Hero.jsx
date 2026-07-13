import React from 'react';
import styles from '../../../assets/styled/home/hero.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';
import { chars } from '../../../shared/common/data/staticData';

const Hero = () => {
    const id = "hero";
    const {setActiveSection, sectionRef} = useSectionRef(id);

    const radius = 250;
    const angleStep = 360 / chars.length;

    return (
        <section 
            id={id}
            className={styles.hero}
            ref={sectionRef}
        >
            <div className={styles.title}>
                DEV
            </div>

            <nav className={styles.nav}>
                <div className={styles.rotate}>
                    {
                        chars.map((char, i) => {
                            const angle = angleStep * i;

                            return(
                                <div 
                                    key={i}
                                    className={styles.char}
                                    style={{
                                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`,
                                    }}
                                >
                                    {char}
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
        </section>
    );
};

export default Hero;