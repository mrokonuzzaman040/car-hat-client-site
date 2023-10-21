import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const [data, setData] = useState([]);

    const loadData = useLoaderData();
    console.log(loadData);

    useEffect(() => {
        fetch(`https://car-hat-server.vercel.app/user/`)
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default MyCart;