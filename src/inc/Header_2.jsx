import React, { useEffect, useState } from 'react';
import styles from './styled/header.module.css';
import FullGnb from './FullGnb';

const Header = () => {
    const [isToggle, setIstoggle] = useState(false); //fullGnb 토글

    //fullGnb 열기
    const handleClickHam = (e) => {
        e.preventDefault();
        setIstoggle(true);
    };

    return (
        <>
            <header>
                <nav className={styles.nav}>
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