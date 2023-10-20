import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from "react-icons/bi";
import axios from 'axios';
import { AuthContex } from '../../Auth/AuthProvider/AuthProvider';

const CarDetails = () => {
const cars = useLoaderData();

const {_id,car_name, car_photo,technology ,brand_name,car_price,car_description,car_rating} = cars;

const { user } = useContext(AuthContex);


const addToCart = async(carId) => {
    try {
        const res = await axios.post(`http://localhost:3000/addtocart/${user.uid}`, {
            carId
        })
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}   

    return (
        <div>
            <div className='lg:p-10 p-4 mx-auto w-full max-w-screen-xl'>
                <div className="text-white">
                 <div className="relative">
                        <img className='w-full lg:h-[700px] rounded-xl' src={car_photo} alt="" />
                     <div className="w-full absolute bottom-0 rounded-b bg-black opacity-80 flex items-center justify-between p-4">
                      <div className="">
                        <h2 className='text-orange-500 font-bold ml-10 text-4xl'>{car_price}</h2>
                      </div>
                      <div className="">
                        <button onClick={()=> {addToCart(_id)}} className='btn bg-orange-500 text-white hover: bg-transparent hover:text-orange-500'>Add to Cart</button>
                      </div>
                        
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl mb-5 font-bold text-black uppercase">{car_name}</h1>
                    <p className="text-black uppercase">{brand_name}</p>
                    {/* <p classNatext-black uppercaseme="">{}</p> */}
                    <p className="text-black uppercase">{technology}</p>
                    <p className="text-black uppercase">{car_rating}</p>
                    <p className="text-black uppercase">{car_description}</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default CarDetails;