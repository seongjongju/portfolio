import React, { memo, useEffect, useState } from 'react';
import styles from './styled/fullgnb.module.css';
import Footer from './Footer';
import { depths } from 'src/shared/data/staticData';
import { Link } from 'react-router-dom';

const FullGnb = memo(({isToggle, setIstoggle}) => {
    const [block, setBlock] = useState("none");
    const [opacity, setOpacity] = useState("0");

    //fullGnb 열림/닫힘 에니메이션
    useEffect(() => {
            let timer;

            if(isToggle) {
                setBlock("block");
                timer = setTimeout(() => {
                    setOpacity("1");
                }, 100);
            } else {
                setOpacity("0");
                timer = setTimeout(() => {
                    setBlock("none");
                }, 400);
            }
        
        return () => {
            if(timer) {
                clearTimeout(timer);
            }
        }
    }, [isToggle, setBlock, setOpacity]);

    //fullGnb 닫기
    const handleClickClose = () => {
        setIstoggle(false);
    };

    return (
        <div 
            style={{
                display: block,
                opacity: opacity
            }}
            className={styles.gnb}
        >
            <button 
                className={styles.close}
                onClick={(e) => {
                    e.preventDefault();
                    handleClickClose();
                }}
            >
                <span></span>
                <span></span>
            </button>
            <ul className={styles.gnb_list}>
                <li>
                    <Link 
                        className={styles.depth}
                        to={'/'}
                        onClick={handleClickClose}
                    >
                        HOME
                    </Link>
                </li>
                {
                    depths.map((depth) => (
                        <li key={depth.id}>
                            <Link 
                                className={styles.depth}
                                to={depth.page}
                                onClick={handleClickClose}
                            >
                                {depth.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Footer />
        </div>
    );
});

export default FullGnb;