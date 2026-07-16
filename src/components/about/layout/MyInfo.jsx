import React from 'react';
import styles from 'src/assets/styled/home/about.module.css';
import Character from 'src/shared/components/UI/Character';

const MyInfo = () => {
    return (
        <div className={styles.info}>
            <figure className={styles.img}>
                <Character />
            </figure>
        </div>
    );
};

export default MyInfo;