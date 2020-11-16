import React from 'react';
import ProductCarousel from './ProductCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomeDetails.css';

const HomeDetails = () => {
    return (
        <div className="row">
             <div id="landing-wrapper"><span className="top-title">Apartment</span></div>
            <div className="container">
                <div className="row" style={{marginTop:'40px'}}>
                    <div className="col-md-8">
                        <ProductCarousel/>
                            <div className="">
                                    <div className="float-left">
                                        <h3>Family Apartment Three</h3>
                                    </div>
                                    <div className="float-right">
                                        <h3 className="text-right"> $253</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                    <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne. </p>
                                    <h5>Price Details</h5>
                                    <ul style={{ listStyleType: 'none', margin: '0',  padding: '0'}}>
                                        <li> Rent/Month: $550 (negotiable)</li>
                                        <li>Service Charge : 8,000/= Tk per month, subject to change</li>
                                        <li>Security Deposit : 3 month's rent</li>
                                        <li>Flat Release Policy : 3 months earlier notice required </li>
                                    </ul>
                                    <h5>Property Details</h5>
                                    <ul style={{ listStyleType: 'none', margin: '0',  padding: '0'}}>
                                        <li>Address S. Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</li>
                                        <li>Flat Size : 3000 Sq Feet.</li>
                                        <li>Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit)</li>
                                        <li>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining S. Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</li>
                                        <li>Facilities :1 Modern Lift, All Modern Amenities 8. Semi Furnished.</li>
                                        <li>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver's Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</li>
                                    </ul>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-outline-secondary" style={{backgroundColor:'#EFEFEF'}}>
                        <div className="card-body">
                                                        
                            <form autocomplete="off" className="form" role="form" style={{paddingTop:'25px'}}>
                            <div className="form-group">
                                <input className="form-control" id="full-name" required="required" title="First and last name" placeholder="Full Name" type="text"/>
                            </div>                        
                            
                            <div className="form-group">
                                <input className="form-control" id="phone-no" required="required" title="Phone no" placeholder="Phone No." type="text"/>
                            </div> 
                            <div className="form-group">
                                <input className="form-control" id="email-address" required="required" title="Email address" placeholder="Email Address" type="text"/>
                            </div> 
                            <div className="form-group">
                                 <textarea className="form-control" id="message" required="required" title="Message" placeholder="Message"  rows="4" cols="50"/>
                            </div> 
                            <div className="form-group row">
                                <div className="col-md-12">
                                <button className="btn-block green-flat-button" type="submit">Request Booking</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>   
               </div>      
            </div>
        </div>
    );
};

export default HomeDetails;