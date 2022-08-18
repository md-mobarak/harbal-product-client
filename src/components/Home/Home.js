import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import OurProducts from './OurProducts';
import TopProduct from './TopProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopProduct></TopProduct>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;