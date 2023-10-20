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
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Car Hat</span>
                    </Link>
                    <div className="flex items-center">
                        {
                            user ? <div className="flex items-center gap-2">
                                <button onClick={handelLogout} className='btn btn-sm'>Logout</button>
                                <Link to={'/dashboard'} className="btn btn-ghost btn-circle avatar">
                                    <img className='rounded-full' src={user.photoURL} />
                                </Link>
                            </div> : <Link to={'/login'}>
                                <button className='btn btn-sm'>Login</button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <NavLink to='/' className={"text-gray-900 dark:text-white hover:underline  "} aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/myCart' className="text-gray-900 dark:text-white hover:underline">My Cart</NavLink>
                            </li>
                           {
                            user ? <li>
                            <NavLink to={'/addItems'} className="text-gray-900 dark:text-white hover:underline">Add Car</NavLink>
                            </li> : null
                           }
                           
                        </ul>
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    );
};

export default Navbar;