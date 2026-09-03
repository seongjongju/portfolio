import React, { useEffect, useState } from 'react';

const Dim = ({closePopup, popupActive}) => {
    const [style, setStyle] = useState({
        background: "rgba(0, 0, 0, 0)", 
        backdropFilter: "blur(0)",
        display: "none",
    });

    useEffect(() => {
        if(popupActive) {
            setStyle(prev => ({
                ...prev,
                display: "block",
            }));

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    background: "rgba(0, 0, 0, .5)", 
                    backdropFilter: "blur(10px)",
                }));
            }, 100);

            return () => clearTimeout(timerId);
        } else {
            setStyle(prev => ({
                ...prev,
                background: "rgba(0, 0, 0, 0)", 
                backdropFilter: "blur(0)",
            }));

            const timerId = setTimeout(() => {
                setStyle(prev => ({
                    ...prev,
                    display: "none",
                }));
            }, 400);

            return () => clearTimeout(timerId);
        }
    }, [popupActive]);

    return (
        <div 
            style={style}
            className="dim"
            onClick={closePopup}
        >
            
        </div>
    );
};

export default Dim;