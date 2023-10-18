import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const AllCars = ({ }) => {
    const cars = useLoaderData();
    const [car, setCars] = useState([]);

    const { _id } = cars;

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-hat-server-m8fcq7q3q-md-rokon-uzzamans-projects.vercel.app/cars${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = cars.filter(car => car._id !== _id);
                            setCars(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div>
            <h1>All Cars</h1>
            <div className='w-full'>
                {cars.map(car => (
                    <div key={car._id} className="w-full flex flex-row gap-10 items-center p-4">
                        <div className="w-96">
                            <img className='w-full' src={car.car_photo} alt="" />
                        </div>
                        <div className="">
                            <h2>{car.car_name}</h2>
                            <p>{car.car_description}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Delete</button>
                            <Link to={`updateCar/${car._id}`} className='btn btn-success'>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCars;