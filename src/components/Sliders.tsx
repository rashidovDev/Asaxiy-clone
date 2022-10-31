import React from 'react'
import Slider from "react-slick";
import { slider } from '../data';
import Timer from './Timer';

const Sliders = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-[90%] m-auto md:flex justify-between'>
        <div className='md:w-[73%] w-[95%] m-auto '>
        <Slider {...settings} className="md:mt-6">
          {slider.map((item,idx) => (
            <img key={idx + 1} className="rounded-[20px] md:h-[390px] h-[220px]"
            src={item.image} alt="slider" />
          ))}
          
          </Slider>
          </div>
          <div className='md:w-[25%] w-[95%] m-auto mt-3 relative'>
          <img className='rounded-[20px] w-full md:h-[390px] h-[280px] md:mt-2'
          src={require("../assets/slider/4.png")} alt="slider" />
          <Timer/>
        </div>
    </div>
  )
}

export default Sliders