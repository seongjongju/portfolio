import React, { useEffect, useState } from 'react';
import styles from './styled/header.module.css';
import { useActiveSection } from '../context/SectionContext';
import FullGnb from './FullGnb';
import { depths } from '../shared/data/staticData';
import { useGsap } from '../context/GsapContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const {isLenis} = useGsap(); //gsap
    const [isToggle, setIstoggle] = useState(false); //fullGnb 토글

    //fullGnb 열기
    const handleClickHam = (e) => {
        e.preventDefault();
        setIstoggle(true);
    };

    return (
        <>
            <header className={`${pathname === "/" ? styles.is_home : ""}`}>
                <nav className={styles.nav}>                     
                    <ul className={styles.gnb}>
                        <li>
                            <Link 
                                to={'/'}
                                className={`
                                    ${styles.depth} 
                                    ${pathname === '/' ? 
                                    styles.is_active : ""
                                }`}
                            >
                                HOME
                            </Link>
                        </li>
                        {depths.map((depth) => {
                            return (
                                <li key={depth.id}>
                                    <Link
                                        to={`${depth.page}`}
                                        className={`
                                            ${styles.depth} 
                                            ${pathname.includes(depth.text.toLocaleLowerCase()) ? 
                                            styles.is_active : ""
                                        }`}
                                    >
                                        {depth.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    
                    <div className={styles.util}>
                        <div className={styles.toggle}>
                            <button className={styles.light}>
                                <img src="/icon/light-icon.png" alt="라이트모드" />
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