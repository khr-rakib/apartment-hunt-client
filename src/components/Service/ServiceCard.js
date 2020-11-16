import React from 'react';
// import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-12 serviceCard">
            <div style={{ border: 'none', background: 'transparent' }} className="card my-3">
                <div className="card-body text-center">
                    <img className="img-fluid" style={{ width: '80px' }} src={service.img} alt="" />
                    <h5 className="card-title heading-color text-brand font-weight-bold my-3">{service.title}</h5>
                    <p className="card-text text-secondary">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;