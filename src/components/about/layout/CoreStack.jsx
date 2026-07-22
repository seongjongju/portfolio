import React from 'react';
import styles from 'src/assets/styled/about/about.module.css';
import StackChart from '../UI/StackChart';
import { stackDatas } from 'src/shared/data/staticData';
import Subject from 'src/shared/components/UI/Subject';

const CoreStack = () => {
    return (
        <section className={styles.section}>
            <nav className={styles.nav}>
                <Subject 
                    subject={<>CORE STACK</>}
                />
                {/* 프론트 영역 */}
                <p className={styles.stack_title}>01. FRONTEND</p>
                <div className={styles.stack}>
                    {
                        stackDatas.slice(0,4).map((item) => (
                            <StackChart 
                                key={item.id}
                                dataArray={item.data}
                                backgroundColorArray={item.backgroundColor}
                                text={item.text}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </nav>
        </section>
    );
};

export default CoreStack;