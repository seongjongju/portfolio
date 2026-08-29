import React from 'react';
import styles from 'src/assets/styled/project_view.module.css';

const ViewHero = ({ src }) => {
    return (
        <section className={styles.video_wrap}>
            <video 
                src={src}
                autoPlay
                muted
                playsInline
                loop
            ></video>
        </section>
    );
};

export default ViewHero;