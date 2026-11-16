import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import useGsapAnimation from 'src/hooks/useGsapAnimation';
import { footerLinks } from 'src/shared/data/staticData';

const MyInfo = () => {
    const {aboutRef} = useGsapAnimation();

    return (
        <div 
            className={styles.group}
            ref={aboutRef}
        >
            <div className={styles.info}>
                <p className={styles.info_slogan}>
                    <span>
                        <strong>사용자 경험</strong>과 <strong>웹의 완성도</strong>를 고민하는 웹 개발자입니다.
                    </span>
                </p>
                <p className={styles.info_text}>
                    <span>
                        웹 퍼블리싱 실무 경험을 바탕으로 디자인 시안을 구현하고, HTML·CSS·JavaScript를 활용해 직관적이고 완성도 높은 웹 화면을 만듭니다.
                    </span>
                </p>
                <p className={styles.info_text}>
                    <span>
                        작업할 때는 화면 구현뿐 아니라 이후 수정과 관리도 고려합니다.<br />
                        BEM 규칙을 활용한 CSS 작성과 명확한 폴더 구조를 통해 코드를 알아보기 쉽고 유지보수하기 편하게 작성하려고 합니다.
                    </span>
                </p>
                <p className={styles.info_text}>
                    <span>
                        현재는 실무에서 쌓은 퍼블리싱 경험을 바탕으로 React와 Next.js를 학습하고 프로젝트에 적용하며 프론트엔드 개발 역량을 넓혀가고 있습니다.
                    </span>
                </p>
                <p className={styles.info_text}>
                    <span>
                        AI 도구도 개발 과정에서 활용하고 있습니다. 다만 생성된 코드를 그대로 사용하기보다는 직접 확인하고 수정하면서 코드의 동작 원리와 구조를 이해하는 데 중점을 두고 있습니다.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default MyInfo;