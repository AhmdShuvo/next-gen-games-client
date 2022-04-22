import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Contact from './Contact/Contact';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <Contact></Contact>
            <Review></Review>
        </div>
    );
};

export default Home;