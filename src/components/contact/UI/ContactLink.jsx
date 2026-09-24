import React from 'react';
import styles from 'src/assets/styled/contact.module.css';

const ContactLink = ({ link, platform, icon, download }) => {
    return (
        <>
            {
                download ? (
                    <a 
                        className={styles.contact_link}
                        href={link} 
                        download={download}
                    >
                        {platform}
                        {icon}
                    </a>
                ) : 
                (
                    <a 
                        className={styles.contact_link}
                        href={link} 
                        target='_blank'
                    >
                        {platform}
                        {icon}
                    </a>
                )
            }
        </>
    );
};

export default ContactLink;