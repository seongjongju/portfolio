import React, { useState } from 'react';
import styles from 'src/assets/styled/works.module.css';
import WorksPopup from '../layout/WorksPopup';
import Dim from 'src/shared/components/UI/Dim';
import { createPortal } from 'react-dom';

const Publishing = ({id, img, year, company}) => {
    const [worksId, setWorksId] = useState(""); //프로젝트 ID
    const [popupActive, setPopupActive] = useState(false); //팝업 조작 용

    //팝업에 넘기는 아이디 핸들러
    const handleClickView = (worksId) => {
        setWorksId(worksId);
        setPopupActive(true);
    };

    //팝업을 닫음
    const handleClickClose = () => {
        setWorksId("");
        setPopupActive(false);
    };

    return (
        <>
            <button 
                className={styles.item}
                onClick={() => handleClickView(id)}
            >
                <figure className={styles.figure}>
                    <img src={img} alt={company} className={styles.image} />
                </figure>
                <div className={styles.info}>
                    <p className={styles.year}>{year}</p>
                    <h5 className={styles.company}>{company}</h5>
                </div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="#666"  
                    className={styles.icon}
                >
                    <path 
                        strokeLinecap="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>
            </button>

            {createPortal(
                (   
                    <>
                        <Dim 
                            closePopup={handleClickClose}
                            popupActive={popupActive}
                        />
                         <WorksPopup 
                            popupActive={popupActive}
                            worksId={worksId}
                            closePopup={handleClickClose}
                        />
                    </>
                )
                ,
                document.body
            )}     
        </>
    );
};

export default Publishing;