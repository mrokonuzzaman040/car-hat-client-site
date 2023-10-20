import React from 'react';
import Hero from '../../Components/Header/Hero/Hero';
import Featured from '../../Components/Featured/Featured';
import FollowUs from '../../Components/FollowUs/FollowUs';
import BestDeal from '../../Components/BestDeal/BestDeal';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import OurTeam from '../../Components/OurTeam/OurTeam';
import HowToBuy from '../../Components/HowToBuy/HowToBuy';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Featured></Featured>
            <FollowUs />
            <BestDeal />
            <WhyChooseUs />
            <OurTeam></OurTeam>
            <HowToBuy></HowToBuy>
        </div>
    );
};

export default Home;