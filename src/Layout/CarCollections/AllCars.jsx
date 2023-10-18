import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCars = () => {
    const cars = useLoaderData();


    return (
        <div>
            <h1>All Cars</h1>
            <div className=''>
                {cars.map(car => (
                    <div key={car._id} className="w-full flex flex-row gap-10 items-center p-4">
                    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCars;