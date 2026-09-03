import React, { memo, useEffect, useMemo, useState } from 'react';
import styles from 'src/assets/styled/projects.module.css';
import { useGsap } from 'src/context/GsapContext';
import { viewData } from 'src/shared/data/viewData';

const ProjectPopup = memo(({projectId, closePopup, popupActive}) => {
    const {isLenis} = useGsap();
    const [style, setStyle] = useState({
        opacity: "0",
        display: "none",
    });

    useEffect(() => {
        if(popupActive) {
            setStyle(prev => ({
                ...prev,
                display: "block",
            }));

            isLenis.stop();
            document.body.style.overflow = "hidden";

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    opacity: "1",
                }));
            }, 100);

            return () => {
                clearTimeout(timerId);
                isLenis.start();
                document.body.style.overflow = "auto";
            }
        } else {
            setStyle(prev => ({
                ...prev,
                opacity: "0",
            }));

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    display: "none",
                }));
            }, 400);

            return () => clearTimeout(timerId);
        }
    }, [popupActive]);

    const data = useMemo(() => {
        return viewData?.filter(data => data?.id === projectId)[0];
    }, [projectId]);

    return (
        <div
            data-lenis-prevent="" 
            style={style}
            className={styles.popup}
        >
            <button className={styles.close_btn}>
                <span></span>
                <span></span>
            </button>
            <video 
                className={styles.video}
                src={data?.src}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            <h2 className={styles.title}>{data?.title}</h2>
        </div>
    );
});

export default ProjectPopup;