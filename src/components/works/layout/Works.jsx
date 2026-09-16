import React from 'react';
import styles from 'src/assets/styled/works.module.css';
import Title from 'src/shared/components/UI/Title';
import Publishing from '../UI/Publishing';

const Works = () => {
    const id = "works"

    return (
        <section 
            id={id}
            className={styles.section}
        >
            <nav className={styles.nav}>
                <Title 
                    title="Works"
                />
                <p className={styles.ex}>
                    실제 웹 환경에서 쌓은 퍼블리싱 경험 <br />
                    퍼블리셔로 근무하며 다양한 웹 사이트의 퍼블리싱과 유지보수를 담당했습니다.
                </p>

                <Publishing />
            </nav>
        </section>
    );
};

export default Works;