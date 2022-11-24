import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import CustomerReviews from './CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertised/>
            <Categories/>
            <CustomerReviews/>
            <AboutUs/>
        </div>
    );
};

export default Home;