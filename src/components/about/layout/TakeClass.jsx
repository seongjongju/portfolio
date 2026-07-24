import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import Title from 'src/shared/components/UI/Title';

const TakeClass = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Title 
                    title="Take A Class"
                />
            </nav>
        </section>
    );
};

export default TakeClass;