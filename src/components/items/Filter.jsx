import React from 'react';

const Filter = ({ onInputChange }) => {
    return (
        <div className='filter'>
            <input type="text" onChange={onInputChange} className='input-filter' placeholder='Find a character by name' />
        </div>
    );
};

export default Filter;