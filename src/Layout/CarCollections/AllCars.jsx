import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsCard from './CarsCard';


const AllCars = ({ }) => {
    const cars = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-bold text-orange-500 text-center'>All Cars</h1>

            {cars.map(car => (
                <CarsCard key={car._id} cars={car}></CarsCard>
            ))}
           

        </div>
    );
};

export default AllCars;