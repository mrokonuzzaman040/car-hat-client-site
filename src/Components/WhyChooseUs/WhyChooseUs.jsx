import React from 'react';
import { BsAward } from 'react-icons/bs';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { MdOutlinePayments } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  space-y-20'>
            <h2 className='text-5xl font-extrabold text-center'>Why Choose Us?</h2>
            <div className="grid grid-cols-3 gap-10 p-10 justify-between text-center items-center space-x-8">
                <div className="flex flex-col items-center">

                    <div className="bg-orange-100 rounded-full p-5">
                        <BsAward className='text-3xl text-orange-500'></BsAward>
                    </div>

                    <div className="">
                        <h2 className='text-2xl font-semibold'>Wide range of brands
                        </h2>
                        <p className='text-sm text-center'>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                        </p>
                    </div>
                    
                </div>

                <div className="flex flex-col items-center">

                    <div className="bg-green-100 rounded-full p-5">
                        <VscWorkspaceTrusted className='text-3xl text-green-500'></VscWorkspaceTrusted>
                    </div>

                    <div className="">
                        <h2 className='text-2xl font-semibold'>Wide range of brands
                        </h2>
                        <p className='text-sm'>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col items-center">

                    <div className="bg-blue-100 rounded-full p-5">
                        <MdOutlinePayments className='text-3xl text-blue-500'></MdOutlinePayments>
                    </div>

                    <div className="">
                        <h2 className='text-2xl font-semibold'>Wide range of brands
                        </h2>
                        <p className='text-sm'>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;