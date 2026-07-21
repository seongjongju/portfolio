import React from 'react';
import styles from 'src/assets/styled/home/about.module.css';
import Character from 'src/shared/components/UI/Character';
import Subject from 'src/shared/components/UI/Subject';
import { footerLinks } from 'src/shared/data/staticData';

const MyInfo = () => {
    return (
        <>
            <div className={styles.info}>
                <figure className={styles.info_img}>
                    <Character 
                        classname="about"
                    />
                </figure>
                <div className={styles.info_detail}>
                    <p className={styles.info_slogan}>
                        안녕하세요!! <br style={{display: "block"}} />
                        <strong>체계적인 구조</strong>와 <strong>직관적인 UX</strong>를 고민하는 <br />
                        주니어 프론트엔드 개발자 <strong>성종주</strong>입니다!
                    </p>
                    <p className={styles.info_text}>
                        퍼블리싱 경험을 바탕으로 UI/UX의 디테일을 살리고,<br /> 
                        <strong>React·Next.js</strong> 기반의 프론트엔드 기술을 더해, <br />
                        사용자에게 매끄러운 경험을 제공하는 웹을 만듭니다.
                    </p>
                    <p className={styles.info_text}>
                        단순히 화면만 예쁘게 만드는 데 그치지 않고, 작업의 효율성을 고민합니다.<br /> 
                        <strong>BEM 규칙을 살린 CSS 설계</strong>, 처음 보는 사람도 쉽게 경로를 파악할 수 있는 <strong>폴더 구조</strong>,<br /> 
                        그리고 <strong>재사용 가능한 컴포넌트</strong>를 만드는 데 신경 씁니다.
                    </p>
                    <p className={styles.info_text}>
                        AI 도구를 적극적으로 활용하지만, 절대 코드를 그냥 복사해서 쓰지 않습니다. <br />
                        <strong>"왜 이렇게 동작하는지"</strong> 원리를 완전히 이해할 때까지 끊임없이 질문하고 파고듭니다.<br />
                        AI를 단순한 코드 생성기가 아닌 원리 학습과 생산성 향상을 위한 파트너로 만듭니다.
                    </p>
                </div>
            </div>

            <ul className={styles.info_btns}>
                {
                    footerLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                                className={styles.link}
                                href={link.link}
                                download={link.link}
                                target='_blank'
                            >
                                {link.text}
                            </a>
                        </li>
                    )) 
                }
            </ul>
        </>
    );
};

export default MyInfo;