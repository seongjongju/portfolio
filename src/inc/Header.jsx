import React from 'react';
import styles from './styled/header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className={styles.gnb}>
                        <li>
                            <a href="" className={styles.depth}>ABOUT</a>
                        </li>
                        <li>
                            <a href="" className={styles.depth}>PROJECTS</a>
                        </li>
                        <li>
                            <a href="" className={styles.depth}>CONTACT</a>
                        </li>
                    </ul>
                    <div className={styles.util}>
                        <div className={styles.toggle}>
                            <button className={styles.light}>
                                <img src="/icon/light-icon.png" alt="라이트모드" />
                            </button>
                        </div>
                        <button className={styles.ham}>MENU</button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;