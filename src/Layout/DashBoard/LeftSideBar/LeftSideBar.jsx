import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    return (
        <div className='flex flex-col gap-5 m-5'>
            <Link to={'/addItem'} className='btn'>Add Item</Link>
            <Link to={'/addItem'} className='btn'>Add Item</Link>
            <Link to={'/addItem'} className='btn'>Add Item</Link>
            <Link to={'/addItem'} className='btn'>Add Item</Link>
            <Link to={'/addItem'} className='btn'>Add Item</Link>
        </div>
    );
};

export default LeftSideBar;