import React from 'react';
import { FcCheckmark } from 'react-icons/fc';

const HowToBuy = () => {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-5xl font-bold text-gray-900 dark:text-white">How to buy a car?</h5>
                <div className="divider text-white"></div>

                <div className="flex justify-around items-center">
                    <div className="">
                        <p className="-center flex gap-10 text-white"> <FcCheckmark></FcCheckmark> Best Deal</p>
                        <p className="-center flex gap-10 text-white"> <FcCheckmark></FcCheckmark>sell your car
                        </p>
                        <p className="-center flex gap-10 text-white"> <FcCheckmark></FcCheckmark> car book values</p>
                        <p className="-center flex gap-10 text-white"> <FcCheckmark></FcCheckmark> car dealers</p>
                        <p className="-center flex gap-10 text-white"> <FcCheckmark></FcCheckmark> compare prices</p>
                    </div>
                    <div className="">
                        <button className='btn bg-orange-500 text-white border-transparent hover:bg-transparent hover:text-orange-500 hover:cursor-pointer'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default HowToBuy;