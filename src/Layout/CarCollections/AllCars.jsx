import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsCard from './CarsCard';

const AllCars = ({ }) => {
    const cars = useLoaderData();
    return (
        <div>
            <h1>All Cars</h1>

            {cars.map(car => (
                <CarsCard key={car._id} cars={car}></CarsCard>
            ))}

        </div>
    );
};

export default AllCars;