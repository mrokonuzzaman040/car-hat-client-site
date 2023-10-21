import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const loadData = useLoaderData();
    const allProducts = loadData.flatMap(user => user.details); 
    
    return (
      <div className="">
          <div className='grid grid-cols-3 gap-4 p-10 '>
            {allProducts.map(product => (
                <div key={product._id}>
                    <div className="card sm:w-4/2 sm:h-4/2 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.car_photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {product.car_price}
                        <div className="badge badge-secondary">{product.brand_name}</div>
                        </h2>
                        <p>{product.car_name}</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">{product.technology}</div> 
                        <div className="badge badge-outline">{product.car_rating}</div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    );
}

export default MyCart;