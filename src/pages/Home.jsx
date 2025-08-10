import React from 'react';
import Banner from '../Components/Banner';
import Testimonials from '../Components/Testimonials';
import Chefs from '../Components/Chefs';
import TopFoods from './TopFoods';
import SpecialOffers from './SpecialOffers';
import WhyChooseUs from './WhyChooseUs';
import OurServices from './OurServices ';
import ContactUs from './ContactUs';
import Reservation from './Reservation';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <TopFoods></TopFoods>
            {/* <OurServices></OurServices> */}
            <SpecialOffers></SpecialOffers>
            <Chefs></Chefs>
            <Testimonials></Testimonials>
            <WhyChooseUs></WhyChooseUs>
            
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;