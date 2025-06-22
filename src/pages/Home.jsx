import React from 'react';
import Banner from '../Components/Banner';
import Testimonials from '../Components/Testimonials';
import Chefs from '../Components/Chefs';
import TopFoods from './TopFoods';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <TopFoods></TopFoods>
            <Chefs></Chefs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;