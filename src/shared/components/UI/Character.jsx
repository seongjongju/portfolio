import React, { useEffect, useRef, useState } from 'react';
import faceOff from '/images/face_off.png';
import faceOn from '/images/face_on.png';
import body from '/images/body.png';
import useGsapAnimation from '../../../hooks/useGsapAnimation';
import { useLocation } from 'react-router-dom';

const Character = ({ classname }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isHover, setIsHover] = useState(false);

    //hover
    const characterMouseEnter = () => {
        setIsHover(true);
    };
    
    //leave
    const characterMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div 
            className={`character ${classname}`}
            onMouseEnter={characterMouseEnter}
            onMouseLeave={characterMouseLeave}
        >
            <div 
                className='face'
            >
                <img src={faceOff} alt="눈뜬 얼굴" className={`face__image ${!isHover ? 'is-active' : ''}`} />
                <img src={faceOn} alt="눈감은 얼굴" className={`face__image ${isHover ? 'is-active' : ''}`} />
            </div>
            <img src={body} alt="몸통" className='body' />
        </div>
    );
};

export default Character;