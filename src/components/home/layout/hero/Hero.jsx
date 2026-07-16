import React from 'react';
import styles from 'src/assets/styled/home/hero.module.css';
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
            <nav className={styles.nav} ref={heroTextRef}>
                <div className={styles.titles}>
                    <span className={styles.title}>D</span>
                    <span className={styles.title}>e</span>
                    <span className={styles.title}>v</span>
                    <span className={styles.title}>e</span>
                    <span className={styles.title}>l</span>
                    <span className={styles.title}>o</span>
                    <span className={styles.title}>p</span>
                    <span className={styles.title}>e</span>
                    <span className={styles.title}>r</span>
                </div>

                <div className={styles.texts}>
                    <span className={styles.text}>F</span>
                    <span className={styles.text}>r</span>
                    <span className={styles.text}>o</span>
                    <span className={styles.text}>n</span>
                    <span className={styles.text}>t</span>
                    <span className={styles.text}>e</span>
                    <span className={styles.text}>n</span>
                    <span className={styles.text}>d</span>
                </div>

                <div className={styles.texts}>
                    <span className={styles.text}>P</span>
                    <span className={styles.text}>o</span>
                    <span className={styles.text}>r</span>
                    <span className={styles.text}>t</span>
                    <span className={styles.text}>f</span>
                    <span className={styles.text}>o</span>
                    <span className={styles.text}>l</span>
                    <span className={styles.text}>i</span>
                    <span className={styles.text}>o</span>
                </div>
            </nav>
            <Character 
                classname="hero"
            />
        </section>
    );
};

export default Hero;