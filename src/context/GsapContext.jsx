import { createContext, useContext, useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const GsapContext = createContext();

export const GsapContextProvider = ({children}) => {
    const [isLenis, setIsLenis] = useState();

    useEffect(() => {
        //lenis 라이브러리 세팅
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        //GSAP ScrollTrigger와 Lenis 동기화
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        setIsLenis(lenis);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <GsapContext.Provider value={{isLenis, setIsLenis}}>
            {children}
        </GsapContext.Provider>
    )
};

export const useGsap = () => useContext(GsapContext);