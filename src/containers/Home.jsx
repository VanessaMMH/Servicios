
import Products from '../components/Products';
import Nosotros from '../components/Nosotros';
import Work from '../components/Work';
import React, { Component } from 'react'; 

const Home = ({  classes }) => (
    <>
        <Products />
        <Nosotros/>
        <Work/>
    </>
);


export default Home;