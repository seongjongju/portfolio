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

    //-------------------------projects
    const projectOneRef = useRef(null);
    const projectTwoRef = useRef(null);
    const projectThreeRef = useRef(null);
    const projectfourRef = useRef(null);
    const projectfiveRef = useRef(null);

    useGSAP(() => {
        if (
            !projectOneRef.current ||
            !projectTwoRef.current ||
            !projectThreeRef.current ||
            !projectfourRef.current ||
            !projectfiveRef.current
        ) return;

        if(window.innerWidth <= 1280) return;

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: projectOneRef.current,
                start: 'top top',
                end: '+=300%',
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        tl1.to({}, { duration: 1 });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: projectTwoRef.current,
                start: 'top top',
                end: '+=400%',
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        tl2.to({}, {duration: 1});

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: projectThreeRef.current,
                start: 'top top',
                end: '+=500%',
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        tl3.to({}, {duration: 1});

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: projectfourRef.current,
                start: 'top top',
                end: '+=600%',
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        tl4.to({}, {duration: 1});

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: projectfiveRef.current,
                start: 'top top',
                end: '+=700%',
                pin: true,
                pinSpacing: false,
                scrub: true,
            }
        });

        tl5.to({}, {duration: 1});
    }, []);

    return {
        heroTextRef,

        projectOneRef,
        projectTwoRef,
        projectThreeRef,
        projectfourRef,
        projectfiveRef
    };
};

export default useGsapAnimation;