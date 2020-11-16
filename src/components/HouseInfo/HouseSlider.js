import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/slider/Rectangle 407.png';
import image2 from '../../assets/slider/Rectangle 408.png';
import image3 from '../../assets/slider/Rectangle 409.png';
import image4 from '../../assets/slider/Rectangle 410.png';

const HouseSlider = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img alt="" src={image1} />
            </div>
            <div>
                <img alt="" src={image2} />
            </div>
            <div>
                <img alt="" src={image3} />
            </div>
            <div>
                <img alt="" src={image4} />
            </div>
        </Carousel>
    );
};

export default HouseSlider;