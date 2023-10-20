import React, { useContext } from 'react';
import { AuthContex } from '../../../Auth/AuthProvider/AuthProvider';

const MyCart = () => {
    const { user } = useContext(AuthContex);
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default MyCart;