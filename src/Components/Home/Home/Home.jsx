import React from 'react';
import Apartment from '../Apartment/Apartment/Apartment';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Service from '../Service/Service/Service';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Apartment></Apartment>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;