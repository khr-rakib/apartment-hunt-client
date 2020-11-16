import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
  {
    id: 'SV2001',
    title: 'Wide Range of Properties',
    description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
    img: 'https://i.ibb.co/VBWHQR9/apartment-1.png',
  },
  {
    id: 'SV2002',
    title: 'Financing Made Easy',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
    img: 'https://i.ibb.co/pbzfYVM/affordable-1.png',
  },
  {
    id: 'SV2003',
    title: 'Trusted by Thousands',
    description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
    img: 'https://i.ibb.co/H2DPGmK/lessee-1.png',
  },
  
]


const Service = () => {
  return (
    <section className="py-5 container-fluid">
      <h6 style={{color:'#275A53', textAlign:'center'}}>Service</h6>
      <h2 className='font-weight-bold heading-color text-center'>We're an agency tailored to all <br/> clients' needs that always delivers</h2>
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: '85%' }} className="row">
          {
            serviceData.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Service;