import React, { useEffect, useState } from 'react';
import styles from './styled/header.module.css';
import { useActiveSection } from '../context/SectionContext';
import FullGnb from './FullGnb';
import { depths } from '../shared/data/staticData';
import { useGsap } from '../context/GsapContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sun from 'src/assets/icon/sun.png';

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const {activeSection} = useActiveSection();
    const {isLenis} = useGsap(); //gsap
    const [isToggle, setIstoggle] = useState(false); //fullGnb 토글

    //fullGnb 열기
    const handleClickHam = (e) => {
        e.preventDefault();
        setIstoggle(true);
    };

    //상단으로 이동
    const handleClickTop = (e) => {
        e.preventDefault();
        isLenis.scrollTo(0, {
            offset: 0,
            duration: 1,
        });
    };

    return (
        <>
            <header className={styles.is_home}>
                <nav className={styles.nav}>                     
                    <ul className={styles.gnb}>
                        {depths.map((depth) => {
                            return (
                                <li key={depth.id}>
                                    <a
                                        href={`#${depth.page}`}
                                        className={`
                                            ${styles.depth} 
                                            ${activeSection === depth.page ? 
                                            styles.is_active : ""
                                        }`}
                                        onClick={() => {
                                            isLenis.scrollTo(`#${depth.page}`, {
                                                offset: 0,
                                                duration: 1,
                                            });
                                        }}
                                    >
                                        {depth.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    
                    <div className={styles.util}>
                        <button 
                            className={styles.top}
                            onClick={handleClickTop}
                        >
                            TOP
                        </button>
                        <div className={styles.toggle}>
                            <button className={styles.light}>
                                <img src={sun} alt="라이트모드" />
                            </button>
                        </div>
                        <button 
                            className={styles.ham}
                            onClick={handleClickHam}
                        >
                            MENU
                        </button>
                    </div>
                </nav>
            </header>

            <FullGnb 
                isToggle={isToggle}
                setIstoggle={setIstoggle}
            />
        </>
    );
};

export default Header;