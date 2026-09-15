import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import { stackIcons, stackIconsWhite } from 'src/shared/data/staticData';
import Subject from 'src/shared/components/UI/Subject';
import { useDarkMode } from 'src/context/DarkModeContext';
import useGsapAnimation from 'src/hooks/useGsapAnimation';

const CoreStack = () => {
    const {isDark} = useDarkMode();
    const {subjectRef} = useGsapAnimation();

    return (
        <div className={styles.group}>
            <Subject 
                subject="CoreStack"
                ref={subjectRef}
            />
            <div className={styles.stack}>
                {
                    isDark ? 
                    (
                        stackIconsWhite.map((icon) => (
                            <figure 
                                key={icon.id}
                                className={styles.stack_iconbox}
                            >
                                <img 
                                    height="60" 
                                    width ="60" 
                                    src={icon.src}
                                    className={styles.stack_icon} 
                                />      
                                <p className={styles.stack_text}>{icon.text}</p>
                            </figure> 
                        ))
                    ) :
                    (
                        stackIcons.map((icon) => (
                            <figure 
                                key={icon.id}
                                className={styles.stack_iconbox}
                            >
                                <img 
                                    height="60" 
                                    width ="60" 
                                    src={icon.src}
                                    className={styles.stack_icon} 
                                />      
                                <p className={styles.stack_text}>{icon.text}</p>
                            </figure> 
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default CoreStack;