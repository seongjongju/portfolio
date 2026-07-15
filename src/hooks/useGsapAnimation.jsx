import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = () => {
    //hero
    const heroTextRef = useRef(null);

    useGSAP(() => {
        if(!heroTextRef.current) null;
    }, [])

    return {
        heroTextRef
    };
};

export default useGsapAnimation;