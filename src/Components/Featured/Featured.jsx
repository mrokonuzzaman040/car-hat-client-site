import React from 'react';
import BMW from '../../Layout/CarCollections/BMW';

const Featured = () => {
    return (
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
            <div className="">
                <h2 className='text-orange-500 font-semibold'>Handy picked</h2>
                <p className='font-bold text-5xl'> Featured Listings</p>
                {/* <BMW></BMW> */}
            </div>
        </div>
    );
};

export default Featured;