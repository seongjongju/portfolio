import React from 'react';

const Subject = ({subject, ref}) => {
    return (
        <h5 
            className='subject'
            ref={ref}
        >
            {subject}
            <div className='subject__ball'></div>
        </h5>
    );
};

export default Subject;