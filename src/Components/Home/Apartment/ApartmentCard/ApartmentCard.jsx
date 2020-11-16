import React from 'react';
import './ApartmentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const ApartmentCard = (props) => {
  const { title, location, bedroom, bathroom, price, img } = props.singleApartment
  return (
    <div className="col-md-4 col-sm-12 apartmentCard">
      <div className=" my-4">
        <div className="card shadow">
          <img className="card-img-top" src={img} alt={title} />
          <div className="card-body text-muted">
            <h4 className="card-title font-weight-bold heading-color">{title}</h4>
            <div><span><FontAwesomeIcon className="icon-style" icon={faMapMarkerAlt} />{location}</span></div>
            <div>
              <span className="mr-5"><FontAwesomeIcon className="icon-style" icon={faBed} />{bedroom}</span>
              <span><FontAwesomeIcon className="icon-style" icon={faBath} />{bathroom}</span>
            </div>
            <div className="d-flex justify-content-between mt-4 mb-2">
              <h2 className="font-weight-bold green-color">${price}</h2>
              <button className="btn text-white green-bg">View Details</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;