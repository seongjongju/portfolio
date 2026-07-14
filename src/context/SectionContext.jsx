import { createContext, useState, useContext } from 'react';

const SectionContext = createContext();

export const SectionContextProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState('');
    
    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    )
};

export const useActiveSection = () => useContext(SectionContext);