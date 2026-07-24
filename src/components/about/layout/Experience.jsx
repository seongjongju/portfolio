import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import Title from 'src/shared/components/UI/Title';

const Experience = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Title 
                    title="Experience"
                />
                <div>
                    <h5 className={styles.year}>2024.11 ~ Current</h5>
                    <div className={styles.detail}>
                        <h6 className={styles.company}>(주)신비웹</h6>
                        <p className={styles.work}>웹 퍼블리셔</p>
                        <ul className={styles.list}>
                            <li className={styles.list_text}>
                                자사 솔루션 UI 마크업 및 시맨틱 구조화
                            </li>
                            <li className={styles.list_text}>
                                외주 맞춤형 웹 제작 (PC / 모바일 반응형 구현)
                            </li>
                            <li className={styles.list_text}>
                                기존 사이트 UI 개선 및 레이아웃 유지관리
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Experience;