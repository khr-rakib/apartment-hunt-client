import React from 'react';
import ApartmentCard from '../ApartmentCard/ApartmentCard';


const ApartmentData = [
  {
    id: 'PJ2001',
    title: 'Washington Avenue',
    location: 'Nasirabad H/S, Chattogram',
    bedroom: '3 Bedrooms',
    bathroom: '2 Bathroom',
    price: '194',
    img: 'https://i.ibb.co/SQpy3PJ/img1.png',
  },
  {
    id: 'PJ2002',
    title: 'Family Apartment Three',
    location: 'Nasirabad H/S, Chattogram',
    bedroom: '3 Bedrooms',
    bathroom: '2 Bathroom',
    price: '356',
    img: 'https://i.ibb.co/z5XGf2z/img2.png',

  },
  {
    id: 'PJ2003',
    title: 'Gorgeous house',
    location: 'Nasirabad H/S, Chattogram',
    bedroom: '3 Bedrooms',
    bathroom: '2 Bathroom',
    price: '256',
    img: 'https://i.ibb.co/rpJXhRC/Rectangle-398.png',

  },
]

const Apartment = () => {
  return (
    <section className="py-5 container-fluid">
      <h6 style={{color:'#275A53', textAlign:'center'}}>House Rent</h6>
      <h2 className='font-weight-bold heading-color text-center'>Discover the latest <br/> Rent available today</h2>
      <div className="d-flex justify-content-center mt-4">
        <div className="row">
          {
            ApartmentData.map(singleApartment => <ApartmentCard singleApartment={singleApartment} key={singleApartment.id}></ApartmentCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Apartment;