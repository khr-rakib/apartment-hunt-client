import React from 'react';
import './ApartmentCard.css';
import MapIcon from '../../assets/icons/map-icon.png'
import BedIcon from '../../assets/icons/bed-icon.png'
import BathIcon from '../../assets/icons/bath-icon.png'
import { Link } from 'react-router-dom';



const ApartmentCard = (props) => {
    const { title, location, bedroom, bathroom, price, img } = props.singleApartment
    return (
        <div className="col-md-4 col-sm-12 apartmentCard">
            <div className=" my-4">
                <div className="card shadow">
                    <img className="card-img-top" src={img} alt={title} />
                    <div className="card-body text-muted">
                        <h4 className="card-title font-weight-bold heading-color">{title}</h4>
                        <div><span> <img src={MapIcon} alt="" />  {location}</span></div>
                        <div>
                            <span className="mr-5"><img src={BedIcon} alt="" /> {bedroom}</span>
                            <span><img src={BathIcon} alt="" /> {bathroom}</span>
                        </div>
                        <div className="d-flex justify-content-between mt-4 mb-2">
                            <h2 className="font-weight-bold green-color">${price}</h2>
                            <Link to='/house-detail/idid' className="btn text-white green-bg">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;