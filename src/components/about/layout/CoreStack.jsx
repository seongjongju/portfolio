import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import Subject from 'src/shared/components/UI/Subject';
import  { siSimpleicons }  from  'simple-icons' ; 
import { stackIcons } from 'src/shared/data/staticData';
import Title from 'src/shared/components/UI/Title';

const CoreStack = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Title 
                    title="CoreStack"
                />
                <div className={styles.stack}>
                    {
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
                    }
                </div>
            </nav>
        </section>
    );
};

export default CoreStack;