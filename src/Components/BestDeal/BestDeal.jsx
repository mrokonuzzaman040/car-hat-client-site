import React from 'react';
import { Link } from 'react-router-dom';
import Toyota from '../../Layout/CarCollections/Toyota';

const BestDeal = () => {
    return (
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-extrabold text-5xl'>Best Deal</h2>
                </div>
                <div className="">
                    <Link className='btn'>
                        <div className="">
                            <h2>Name</h2>
                            <p>Listing</p>
                        </div>
                    </Link>
                    <Toyota></Toyota>
                </div>
            </div>
        </div>
    );
};

export default BestDeal;