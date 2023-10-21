import React from 'react';

const Slider = () => {
    return (
        <div>
               <div>
            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/W0Nd5GP/6.jpg'} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/9HFKztg/1-54-1024x683.jpg'} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/W0Nd5GP/6.jpg'} className="w-full lg:h-[450px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Slider;