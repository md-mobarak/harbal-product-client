import React from 'react';
import CardSlider from '../CardSlider/CardSlider';
import SingupForNews from '../CardSlider/SingupForNews';
import Footer from '../Footer/Footer';
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
            <SingupForNews></SingupForNews>
            <CardSlider></CardSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;