import React from 'react';
import Swal from "sweetalert2";

const AddItems = () => {
    const handleAddCars = (e) => {

        e.preventDefault();

        const form = e.target;
        const car_name = form.name.value;
        const technology = form.technology.value;
        const brand_name = form.brand_name.value;
        const car_price = form.car_price.value;
        const car_description = form.car_description.value;
        const car_rating = form.car_rating.value;
        const car_photo = form.car_photo.value;

        const newCar = {
            car_name,
            technology,
            brand_name,
            car_price,
            car_description,
            car_rating,
            car_photo
        };

        fetch('https://car-hat-server.vercel.app/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added to cart successfully', 
                confirmButtonText: 'Close'
            })
        }
    })
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Add Your Car</h2>
            <div className="bg-base-100 p-24">
                <form onSubmit={handleAddCars}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name Of the car" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <select type="text" name="technology" placeholder="Technology and Electronics" className="input input-bordered w-full">
                                    <option value="petrol">Petrol</option>
                                    <option value="Desel">Desel</option>
                                    <option value="EV">EV</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select type="text" name="brand_name" placeholder="" className="input input-bordered w-full">
                                    <option value="BMW">BMW</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Kia">Kia</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="car_price" placeholder="Price in $" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="car_description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="car_rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="car_photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Car" className="btn btn-block" />

                </form>
            </div>
        </div>

    );
};

export default AddItems;