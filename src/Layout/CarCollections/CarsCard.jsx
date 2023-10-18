import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CarsCard = ({ cars }) => {

    const { _id, car_name, technology, brand_name, car_photo, car_price, car_description, car_rating } = cars;

    const [car, setCars] = useState([])

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

                fetch(`https://car-hat-server-m8fcq7q3q-md-rokon-uzzamans-projects.vercel.app/cars/${_id}`, {
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
                            // const remaining = cars.filter(car => car._id !== _id);
                            // setCars(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl my-6 gap-5 items-center">
            <figure><img className="w-80" src={car_photo} alt="Cars" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">{car_name}</h2>
                    <p>{technology}</p>
                    <p>{brand_name}</p>
                    <p>{car_price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsCard;