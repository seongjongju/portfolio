import React, { useEffect, useState } from 'react';
import styles from './styled/header.module.css';
import { useActiveSection } from '../context/SectionContext';

const depths = [
    { id: "section_0", order: 0, text: "ABOUT" },
    { id: "section_1", order: 1, text: "PROJECTS" },
    { id: "section_2", order: 2, text: "CONTACT" },
];

const Header = () => {
    const { activeSection } = useActiveSection();
    const [x, setX] = useState(-200); 
    const [isHovered, setIsHovered] = useState(false); 

    const WIDTH = 200;

    //스크롤 할 때
    useEffect(() => {
        if (isHovered) return;

        const currentDepth = depths.find((d) => d.id === activeSection);

        if (currentDepth) {
            setX(WIDTH * currentDepth.order);
        } else if(activeSection === 'hero') {
            setX(-200);
        }
    }, [activeSection, isHovered]);

    //hover 시
    const handleMouseEnter = (order) => {
        setIsHovered(true);
        setX(WIDTH * order);
    };

    const handleMouseLeaveGnb = () => {
        setIsHovered(false);
        
        const currentDepth = depths.find((d) => d.id === activeSection);
        if (currentDepth) {
            setX(WIDTH * currentDepth.order);
        } else {
            setX(-200);
        }
    };

    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.gnbwrap}>
                    <div
                        className={styles.hoverui}
                        style={{
                            left: `${x + 0.5}px`,
                        }}
                    ></div>
                    
                    <ul className={styles.gnb} onMouseLeave={handleMouseLeaveGnb}>
                        {depths.map((depth) => {
                            return (
                                <li key={depth.id}>
                                    <a
                                        href={`#${depth.id}`}
                                        className={styles.depth}
                                        onMouseEnter={() => handleMouseEnter(depth.order)}
                                    >
                                        {depth.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

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
    );
};

export default Header;