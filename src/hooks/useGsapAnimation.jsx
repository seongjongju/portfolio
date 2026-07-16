import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const startArray = ["top 50%", "top 80%"];

const useGsapAnimation = () => {
    //-------------------------hero
    const heroTextRef = useRef(null); //title, text

    useGSAP(() => {
        if(!heroTextRef.current) return;
        const heroFace = heroTextRef.current.nextSibling; //캐릭터 얼굴
        const heroTexts = heroTextRef.current.querySelectorAll('span'); //텍스트

        gsap.fromTo(heroFace,
            { scale: 0, },
            {
                scale: 1,
                duration: 0.3,
                delay: 0.2,
                scrollTrigger: {
                    trigger: heroTextRef.current,
                    start: startArray[0],
                    toggleActions: "play none none none",
                }
            }
        );

        heroTexts.forEach((text, i) => {
            gsap.fromTo(text,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0,
                    duration: 0.1,
                    delay: i * 0.07,
                    scrollTrigger: {
                        trigger: heroTextRef.current,
                        start: startArray[0],
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, []);

    return {
        heroTextRef
    };
};

export default useGsapAnimation;