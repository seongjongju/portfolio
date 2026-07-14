import React, { memo, useEffect, useState } from 'react';
import styles from './styled/fullgnb.module.css';
import Footer from './Footer';
import { depths } from '../shared/common/data/staticData';
import { useLenis } from '../context/LenisContext';

const FullGnb = memo(({isToggle, setIstoggle}) => {
    const {isLenis} = useLenis(); //lenis
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
                {
                    depths.map((depth) => (
                        <li key={depth.id}>
                            <a 
                                className={styles.depth}
                                href={`#${depth.id}`}
                                onClick={() => {
                                    isLenis.scrollTo(`#${depth.id}`, {
                                        offset: 0,
                                        duration: 1,
                                    });
                                    handleClickClose();
                                }}
                            >
                                {depth.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <Footer />
        </div>
    );
});

export default FullGnb;