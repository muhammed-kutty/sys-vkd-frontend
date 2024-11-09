import React from 'react';
import { Carousel } from 'react-bootstrap';
import { SliderImages } from './Images';

const Slider = () => {
  return (
    <div  className='slider_main' >

    <Carousel >
        {
            SliderImages?.map((item)=>(
                
                <Carousel.Item key={item.id}>
        <img
          className="sliderimg"
          src={item.imag}
          alt="First slide"
          />
    
      </Carousel.Item>
    ))
}
        
        </Carousel>
</div>
  );
};

export default Slider;
