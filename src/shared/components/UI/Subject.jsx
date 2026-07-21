import React from 'react';

const Subject = ({subject}) => {
    return (
        <h5 className='subject'>
            {subject}
            <div className='subject__ball'></div>
        </h5>
    );
};

export default Subject;