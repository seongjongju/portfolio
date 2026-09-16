import React from 'react';
import styles from 'src/assets/styled/works.module.css';

const Publishing = () => {
    return (
        <a href="#self" target='_blank' className={styles.item}>
            <figure className={styles.figure}>
                <img src="" alt="" />
            </figure>
            <div className={styles.info}>
                <h5 className={styles.company}>업체명</h5>
            </div>
            {/* 2026
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="#666"  
                className={`${styles.icon} ${styles.explore}`}
            >
                <path 
                    strokeLinecap="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg> */}
        </a>
    );
};

export default Publishing;