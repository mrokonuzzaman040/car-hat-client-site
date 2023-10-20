import React from 'react';
import { Link } from 'react-router-dom';
import { SiBmw, SiAudi, SiFord, SiMercedes, SiTesla, SiHonda, SiKia } from 'react-icons/si';

const Hero = () => {
    return (
        <div>
            <div className="hero min-w-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MG982Fg/bg-1920-new.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex-col flex items-center">
                        <h1 className="mb-5 text-5xl font-bold">Find Your <span className='text-5xl text-orange-500'> Perfect</span> Car</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex gap-5 shadow-sm text-4xl">
                            <div className="">
                                <Link to={'/bmw'}><SiBmw></SiBmw></Link>
                            </div>
                            <div className="">
                                <Link to={'/audi'}><SiAudi></SiAudi></Link>
                            </div>
                            <div className="">
                                <Link to={'/ford'}><SiFord></SiFord></Link>
                            </div>
                            <div className="">
                                <Link to={'/mercedes'}><SiMercedes></SiMercedes></Link>
                            </div>
                            <div className="">
                                <Link to={'/tesla'}> <SiTesla></SiTesla></Link>
                            </div>
                            <div className="">
                                <Link to={'/honda'}><SiHonda></SiHonda></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;