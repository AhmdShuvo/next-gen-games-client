import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <Contact></Contact>
        </div>
    );
};

export default Home;