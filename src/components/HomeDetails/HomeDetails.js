import React from 'react';
import topBanner from '../../images/Rectangle 13.png';
import previewImage from '../../images/Rectangle 394.png';

const HomeDetails = () => {
    return (
        <div className="row">
            <img src={topBanner} alt="" height="200px" width="100%"></img>
            <div className="container">
                <div className="row" style={{marginTop:'40px'}}>
                    <div className="col-md-8">
                    <img src={topBanner} alt="" height="400px" width="100%"></img>
                    </div>
                    <div className="col-md-4">
                            ykjyukyuk
                            </div>   
               </div>      
            </div>
        </div>
    );
};

export default HomeDetails;