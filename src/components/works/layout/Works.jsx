import React from 'react';
import styles from 'src/assets/styled/works.module.css';
import Title from 'src/shared/components/UI/Title';
import Publishing from '../UI/Publishing';
import { publishingData } from 'src/shared/data/staticData';
import useGsapAnimation from 'src/hooks/useGsapAnimation';

const Works = () => {
    const id = "works"
    const {titleRef, worksRef, publRef} = useGsapAnimation();

    return (
        <section 
            id={id}
            className={styles.section}
            ref={worksRef}
        >
            <nav className={styles.nav}>
                <Title 
                    title="Works"
                    ref={titleRef}
                />
                <p className={`${styles.ex} works-ex`}>
                    <span>
                        실제 웹 환경에서 쌓은 퍼블리싱 경험 <br />
                        퍼블리셔로 근무하며 다양한 웹 사이트의 퍼블리싱과 유지보수를 담당했습니다.
                    </span>
                </p>

                <div 
                    className={`${styles.Publishings} publishings`}
                    ref={publRef}
                >
                    {
                        publishingData?.map((publ) => (
                            <Publishing 
                                key={publ?.id}
                                img={publ?.img}
                                year={publ?.year}
                                company={publ?.company}
                                link={publ?.link}
                            />
                        ))
                    }
                </div>
            </nav>
        </section>
    );
};

export default Works;