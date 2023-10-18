import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { AuthContex } from '../../../Auth/AuthProvider/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContex)

    const handelLogout = () => {
        logoutUser()
            .then(result => {
                toast.success('Logout Success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>
            <div className="flex justify-between items-center bg-black opacity-80 text-white p-5">
                <div className="flex sm:w-1/2" >
                    <div className="flex items-center">
                        <img className='w-1/2' src={logo} alt="" />
                    </div>
                    <div className="gap-10 flex items-center">
                        <NavLink to="/" >
                            Home
                        </NavLink>
                        <NavLink to="/about" >
                            About
                        </NavLink>
                        <NavLink to="/contact" >
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                  
                    <div className="">
                        {
                            user ? <div className="flex gap-4">
                                <Link to={'/dashboard'} className='btn btn-outline btn-accent'>Dashboard</Link>
                                <button onClick={handelLogout} className='btn btn-outline btn-accent'>Logout</button> 
                            </div>: <Link to={'/login'} className='btn btn-outline btn-accent'>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;