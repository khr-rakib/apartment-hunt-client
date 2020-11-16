import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <div className="header-container header-bg d-flex justify-content-center align-items-center">
      <div className="container-fluid row d-flex justify-content-center">
        <div className="col-md-10 text-center">
          <h1 className="text-white my-4">FIND YOUR HOUSE RENT</h1>
          <span><input className="w-50 px-3 py-2 mr-3 input-style" type="text" placeholder="Search..." /></span>
          <span><input className="btn green-bg text-white px-4 py-2" type="submit" value="Find Now"/></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;