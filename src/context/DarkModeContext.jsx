import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(() => {
        const saved = sessionStorage.getItem('isDark');
        return saved !== null ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        sessionStorage.setItem('isDark', JSON.stringify(isDark));

        if(isDark) {
            document.body.classList.add('is-dark');
        } else {
            document.body.classList.remove('is-dark');
        }
    }, [isDark]);
    
    return (
        <DarkModeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </DarkModeContext.Provider>
    )
};

export const useDarkMode = () => useContext(DarkModeContext);
