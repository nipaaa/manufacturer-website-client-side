import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useParts();
    const newParts = parts.slice(-6);
    return (
        <div className='px-12'>
            <h1 className='text-center text-primary text-4xl my-8 font-bold'>Available Car Parts</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
            {
                newParts.map(part => <Part
                key={part._id}
                part={part}
                ></Part>)
            }
            </div>
           
            
        </div>
    );
};

export default Parts;