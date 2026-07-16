import React from 'react';
import styles from './styled/footer.module.css';
import { footerLinks } from 'src/shared/data/staticData';

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <nav className={styles.nav}>
                <p className={styles.copy}>
                    © 2026 DEV-ARCHIVE
                </p>
                <ul className={styles.link_list}>
                    {
                        footerLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    className={styles.link}
                                    href={link.link}
                                    target='_blank'
                                >
                                    {link.text}
                                </a>
                            </li>
                        )) 
                    }
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;