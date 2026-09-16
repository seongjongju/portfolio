import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const startArray = ["top 50%", "top 80%"];

const mm = gsap.matchMedia();

const useGsapAnimation = () => {
    //----------------------- 공통 타이틀
    const titleRef = useRef(null);

    useGSAP(() => {
        if(!titleRef.current) return;
        
        gsap.fromTo(titleRef.current,
            { y: "100%", opacity: 0},
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: startArray[1],
                    end: "+=300",
                    scrub: true,
                }
            }
        );
    }, []);

    const subjectRef = useRef(null);

    useGSAP(() => {
        if(!subjectRef.current) return;
        
        gsap.fromTo(subjectRef.current,
            { y: "100%", opacity: 0},
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: subjectRef.current,
                    start: startArray[1],
                    end: "+=300",
                    scrub: true,
                }
            }
        );
    }, []);

    //----------------------- about
    const aboutRef = useRef(null);

    useGSAP(() => {
        if(!aboutRef.current) return;
        
        const tl = gsap.timeline({
            ease: "power1.out",
            scrollTrigger: {
                trigger: aboutRef.current,
                start: startArray[1],
                end: "+=500",
                scrub: true,
            }
        });

        const texts = aboutRef.current.querySelectorAll('p > span');
        texts.forEach((text) => {
            tl.from(text, {y: "100%", opacity: 0})
        });

        const btnWrap = aboutRef.current.querySelector('ul');
        tl.from(btnWrap, {y: 30, opacity: 0})
    }, []);

    //----------------------- contact
    const contactRef = useRef(null);
    const liaisonRef = useRef(null);
    const linksRef = useRef(null);

    useGSAP(() => {
        if(!contactRef.current || !liaisonRef.current || !linksRef.current) return;
        
        const tl = gsap.timeline({
            ease: "power1.out",
            scrollTrigger: {
                trigger: contactRef.current,
                start: startArray[1],
                end: "+=300",
                scrub: true,
            }
        });

        const title = contactRef.current.querySelector('h2');
        tl.from(title, {y: 30, opacity: 0})

        const tl2 = gsap.timeline({
            ease: "power1.out",
            scrollTrigger: {
                trigger: liaisonRef.current,
                start: startArray[1],
                toggleActions: "play none none reverse",
            }
        });
        
        const email = liaisonRef.current.querySelector('.email');
        const tel = liaisonRef.current.querySelector('.tel');
        
        tl2.from(email, {y: 30, opacity: 0, duration: 0.3})
        tl2.from(tel, {y: 30, opacity: 0, duration: 0.3}, '-=0.1')

        const tl3 = gsap.timeline({
            ease: "power1.out",
            scrollTrigger: {
                trigger: linksRef.current,
                start: startArray[1],
                toggleActions: "play none none reverse",
            }
        });

        const links = linksRef.current.querySelectorAll('a');
        tl3.from(links[0], {x: -30, opacity: 0, duration: 0.3})
        tl3.from(links[1], {x: 30, opacity: 0, duration: 0.3}, '-=0.3')
    }, []);

    //----------------------- works
    const worksRef = useRef(null);
    const publRef = useRef(null);

    useGSAP(() => {
        if(worksRef.current) {
            const tl = gsap.timeline({
                ease: "power1.out",
                scrollTrigger: {
                    trigger: worksRef.current,
                    start: startArray[1],
                    end: "+=500",
                    scrub: true,
                }
            });

            const ex = worksRef.current.querySelector('.works-ex > span');
            tl.from(ex, {y: "100%", opacity: 0})
        };

        if(publRef.current) {
            const publishings = publRef.current.querySelectorAll('a');
            publishings.forEach((publ, i) => {
                gsap.fromTo(publ,
                    { 
                        x: i % 2 !== 0 ? "-30" : "30", 
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: publ,
                            start: startArray[1],
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }
    }, []);



    return {
        titleRef,
        subjectRef,
        aboutRef,
        contactRef,
        liaisonRef,
        linksRef,
        worksRef,
        publRef
    };
};

export default useGsapAnimation;