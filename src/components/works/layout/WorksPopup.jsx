import React, { useEffect, useMemo, useState } from 'react';
import styles from 'src/assets/styled/works.module.css';
import { useGsap } from 'src/context/GsapContext';
import { worksData } from 'src/shared/data/workViewData';

const WorksPopup = React.memo(({
    popupActive,
    worksId,
    closePopup
}) => {
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
        const filteredData = worksData.filter(data => data.id === worksId);
        return filteredData[0];
    }, [worksId]);

    if(!worksId || !popupActive) return;

    return (
        <div
            data-lenis-prevent="" 
            style={style}
            className={styles.popup}
        >
            <button 
                className={styles.close_btn}
                onClick={closePopup}
            >
                <span></span>
                <span></span>
            </button>

            <figure className={styles.figure}>
                <img src={data.img} className={styles.image} />
            </figure>
            {/* 썸네일 */}

            <div className={styles.group}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.tagline}>{data.summary}</p>
                
                <h5 className={styles.heading}>작업기간 및 작업범위</h5>
                <p className={styles.tagline}>
                    {data.workPeriod}<br />
                    <span>{data.workScope}</span>
                </p>

                <h5 className={styles.heading}>URL</h5>
                <p className={styles.url_text}>
                    <a href={data.link} target='_blank'>{data.link}</a>
                </p>
            </div>
            {/* group */}

            <div className={styles.group}>
                <h3 className={styles.subject}>기술 스택</h3>
                <ul className={styles.badges}>
                    {
                        data.stacks.map((stack) => (
                            <li
                                key={stack} 
                                className={styles.badge}
                            >
                                {stack}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* group */}

            <div className={styles.group}>
                <h3 className={styles.subject}>담당업무</h3>
                <ul className={styles.feat}>
                    {
                        data.responsibilities.map((resp) => (
                            <li
                                key={resp} 
                                className={styles.feat_li}
                            >
                                {resp}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* group */}
        </div>
    );
});

export default WorksPopup;