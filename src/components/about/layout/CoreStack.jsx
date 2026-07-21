import React from 'react';
import styles from 'src/assets/styled/home/about.module.css';
import StackChart from '../UI/StackChart';
import { stackDatas } from 'src/shared/data/staticData';

const CoreStack = () => {
    return (
        <>
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
        </>
    );
};

export default CoreStack;