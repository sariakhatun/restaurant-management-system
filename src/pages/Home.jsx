import React from 'react';
import Banner from '../Components/Banner';
import Testimonials from '../Components/Testimonials';
import Chefs from '../Components/Chefs';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Chefs></Chefs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;