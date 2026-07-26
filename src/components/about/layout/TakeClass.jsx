import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import Subject from 'src/shared/components/UI/Subject';

const TakeClass = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Subject 
                    subject="Take A Class"
                />
                <div>
                    <h5 className={styles.year}>2025.01 ~ 2025.05</h5>
                    <div className={styles.detail}>
                        <h6 className={styles.company}>슈퍼코딩</h6>
                        <p className={styles.work}>풀스택 웹 개발 부트캠프 프론트엔드 파트 이수</p>
                        <ul className={styles.list}>
                            <li className={styles.list_text}>
                                HTML/CSS, JavaScript, React 기반 프론트엔드 핵심 역량 습득 및 프로젝트 진행
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default TakeClass;