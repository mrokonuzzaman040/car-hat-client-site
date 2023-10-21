import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../../../Auth/AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';

const MyCart = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContex);

    const finaldata = data.find((user) => user.userId === user.userId);

    //loop the finaldata to get the product id form the cart
    

    const {_id, userId, userEmail, productId} = finaldata;
    console.log(productId);

    return (
        <div>
            <h2>Your Products Are here</h2>
        </div>
    );
};

export default MyCart;