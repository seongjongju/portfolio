import React, { useRef } from 'react';
import styles from '../../../assets/styled/home/about.module.css';
import { useActiveSection } from '../../../context/SectionContext';
import useSectionRef from '../../../hooks/home/useSectionRef';

const About = () => {
    const id = "section_0";
    const {setActiveSection, sectionRef} = useSectionRef(id);

    return (
        <section 
            id={id} 
            className={styles.section}
            ref={sectionRef}
        >
            <nav className={styles.nav}>
                About Me<br />

                (초안)
                안녕하세요, 사용자에게 자연스러운 인터랙션을 전달하는 것을 
                좋아하는 프론트엔드 개발자입니다.

                다수의 기업 웹사이트 프로젝트에서 마크업부터 애니메이션 작업까지 
                다루며 실무 경험을 쌓았고, GSAP, Swiper.js 등을 활용한 
                인터랙티브 UI 구현에 강점이 있습니다.

                개인 프로젝트에서는 Next.js와 TypeScript 기반의 풀스택 개발을 
                진행하며 MongoDB, API 연동, 결제 시스템 연동 등 백엔드 영역까지 
                경험을 넓히고 있습니다.

                작은 디테일이 사용자 경험을 바꾼다고 믿으며, 
                꾸준히 배우고 적용하는 개발자입니다.
            </nav>
        </section>
    );
};

export default About;