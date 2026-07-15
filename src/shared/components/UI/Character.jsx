import React, { useEffect, useRef, useState } from 'react';
import faceOff from '/images/face_off.png';
import faceOn from '/images/face_on.png';
import body from '/images/body.png';
import useGsapAnimation from '../../../hooks/useGsapAnimation';

const Character = ({ classname }) => {
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
            if (!faceRef.current) return;

            // 1. 얼굴의 중심 좌표 구하기
            const rect = faceRef.current.getBoundingClientRect();
            const faceCenterX = rect.left + rect.width / 2;
            const faceCenterY = rect.top + rect.height / 2;

            // 2. 중심으로부터 마우스 커서의 거리(px)
            const deltaX = event.clientX - faceCenterX;
            const deltaY = event.clientY - faceCenterY;

            // 3. 민감도 및 최대 각도 설정 (원하시는 '살짝만' 움직이는 핵심 설정!)
            const maxAngle = 8; // 최대 기울임 각도 (15도)
            const rangeX = window.innerWidth / 2;  // 화면 절반 크기를 기준으로 비율 계산
            const rangeY = window.innerHeight / 2;

            // 4. 비율에 맞게 회전 각도 계산 (-maxAngle ~ +maxAngle 사이로 제한)
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
                    // perspective와 함께 rotateX, rotateY를 조합하여 입체감을 구현합니다.
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