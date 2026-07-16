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
    //머리 회전용
    const faceRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    //hover
    const characterMouseEnter = () => {
        setIsHover(true);
    };
    
    //leave
    const characterMouseLeave = () => {
        setIsHover(false);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if(pathname === "/about") return;

            if (!faceRef.current) return;

            //얼굴의 중심 좌표 구하기
            const rect = faceRef.current.getBoundingClientRect();
            const faceCenterX = rect.left + rect.width / 2;
            const faceCenterY = rect.top + rect.height / 2;

            // 중심으로부터 마우스 커서의 거리
            const deltaX = event.clientX - faceCenterX;
            const deltaY = event.clientY - faceCenterY;

            // 민감도 및 최대 각도 설정
            const maxAngle = 15; // 최대 기울임 각도 (15도)
            const rangeX = window.innerWidth / 2;  // 화면 절반 크기를 기준으로 비율 계산
            const rangeY = window.innerHeight / 2;

            // 비율에 맞게 회전 각도 계산
            // * 팁: Y축 회전(rotateY)은 마우스의 좌우 이동(deltaX)에 반응합니다.
            // * 팁: X축 회전(rotateX)은 마우스의 상하 이동(deltaY)에 반응하며, 마우스가 위로 갈 때 얼굴도 위를 봐야 하므로 -값을 곱해줍니다.
            const angleY = Math.min(Math.max((deltaX / rangeX) * maxAngle, -maxAngle), maxAngle);
            const angleX = Math.min(Math.max(-(deltaY / rangeY) * maxAngle, -maxAngle), maxAngle);

            setRotateX(angleX);
            setRotateY(angleY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            style={{ perspective: '1000px' }}
            className={`character ${classname}`}
            onMouseEnter={characterMouseEnter}
            onMouseLeave={characterMouseLeave}
        >
            <div 
                className='face'
                ref={faceRef}
                style={{ 
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transition: 'transform 0.15s ease-out', // 마우스를 따라 부드럽게 움직이도록 설정
                    transformOrigin: 'center center'
                }}
            >
                <img src={faceOff} alt="눈뜬 얼굴" className={`face__image ${!isHover ? 'is-active' : ''}`} />
                <img src={faceOn} alt="눈감은 얼굴" className={`face__image ${isHover ? 'is-active' : ''}`} />
            </div>
            <img src={body} alt="몸통" className='body' />
        </div>
    );
};

export default Character;