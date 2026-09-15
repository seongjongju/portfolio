import React from 'react';

const Title = ({title, ref}) => {
    return (
        <h2 className='title'>
            <span ref={ref}>{title}</span>
        </h2>
    );
};

export default Title;