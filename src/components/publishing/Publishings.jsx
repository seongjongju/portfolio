import React from 'react';
import styles from 'src/assets/styled/publishing.module.css';
import Title from 'src/shared/components/UI/Title';

const Publishings = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Title 
                    title="Publishing"
                />
                <p></p>
            </nav>
        </section>
    );
};

export default Publishings;