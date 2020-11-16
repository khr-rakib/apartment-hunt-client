import React from 'react';
import Apartment from '../components/Apartment/Apartment';
import Header from '../components/Header/Header';
import Service from '../components/Service/Service';

const Home = () => {
    return (
        <>
            <Header />
            <Apartment />
            <Service />
        </>
    );
};

export default Home;