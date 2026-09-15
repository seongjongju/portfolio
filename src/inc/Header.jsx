import React, { useEffect, useState } from 'react';
import styles from './styled/header.module.css';
import { useActiveSection } from '../context/SectionContext';
import FullGnb from './FullGnb';
import { useGsap } from '../context/GsapContext';
import { useLocation, useNavigate } from 'react-router-dom';
import sun from 'src/assets/icon/sun.png';
import moon from 'src/assets/icon/moon.png';
import { useDarkMode } from 'src/context/DarkModeContext';

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const {isDark, setIsDark} = useDarkMode(); //다크모드
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

    //다크모드 토글
    const handleClickDarkModeBtn = (e) => {
        e.preventDefault();

        setIsDark(prev => !prev);
    };

    return (
        <>
            <header>
                <nav className={styles.nav}>    
                    <div className={styles.util}>
                        <button 
                            className={styles.top}
                            onClick={handleClickTop}
                        >
                            TOP
                        </button>
                        <div className={styles.toggle}>
                            <button 
                                className={styles.light}
                                onClick={handleClickDarkModeBtn}
                            >
                                <img src={isDark ? moon : sun} alt="라이트모드/다크모드" />
                            </button>
                        </div>
                        {
                            pathname.includes('/projects/') ? 
                            (
                                <button 
                                    className={styles.ham}
                                    onClick={() => {
                                        navigate(-1)
                                    }}
                                >
                                    BACK
                                </button>
                            ) :
                            (
                                <button 
                                    className={styles.ham}
                                    onClick={handleClickHam}
                                >
                                    MENU
                                </button>
                            )
                        }
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