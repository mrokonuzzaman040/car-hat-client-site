import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const FollowUs = () => {
    return (
        <div className='flex justify-between mt-10'>
            <div className="flex items-center gap-5">
                <p className='text-xl text-gray-400'>Folow us</p>

                <Link>
                    <BsFacebook className='text-4xl text-blue-500'>

                    </BsFacebook>
                </Link>

                <Link>
                    <BsTwitter className='text-4xl text-blue-500'>
                    </BsTwitter>
                </Link>

                <Link>
                    <BsInstagram className='text-4xl text-red-400'>

                    </BsInstagram>
                </Link>
            </div>

            <div className="">
                <button className='btn bg-orange-500 text-white'> View $$$$ New</button>
            </div>
        </div>
    );
};

export default FollowUs;