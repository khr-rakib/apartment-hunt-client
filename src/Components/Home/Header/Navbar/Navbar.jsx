import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../../logos/Logo.png'

const Navbar = () => {
  return (
    <div className="container-fluid bg-white">
      <nav className="navbar navbar-expand-lg px-5 bg-white">
        <a className="navbar-brand" href="/home">
          <img style={{ width: '100px' }} src={logo} alt="" />
        </a>
        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto px-3">
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#Concerns">Concerns</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#event">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 font-weight-bold text-mute" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <Link to="/login"><button style={{ borderRadius: '5px' }} className="btn green-bg text-white px-4">Login</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;