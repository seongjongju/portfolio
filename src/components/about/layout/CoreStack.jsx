import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import  { siSimpleicons }  from  'simple-icons' ; 
import { stackIcons } from 'src/shared/data/staticData';
import Subject from 'src/shared/components/UI/Subject';

const CoreStack = () => {
    return (
        <div className={styles.group}>
            <Subject 
                subject="CoreStack"
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
        </div>
    );
};

export default CoreStack;