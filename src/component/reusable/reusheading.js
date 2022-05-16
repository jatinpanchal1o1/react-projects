import React from 'react';

export function Reusheading({title}) {
    return (
        <div className='row'>
            <div className='col text-center mb-5'>
            <h2 className='text-white display-3'>{title}</h2>
            </div>
        </div>
    );
}