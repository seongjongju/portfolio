import { createContext, useContext, useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'

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

const LenisContext = createContext();

export const LenisContextProvider = ({children}) => {
    const [isLenis, setIsLenis] = useState(lenis);

    return (
        <LenisContext.Provider value={{isLenis, setIsLenis}}>
            {children}
        </LenisContext.Provider>
    )
};

export const useLenis = () => useContext(LenisContext);