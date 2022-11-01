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
    <div className='md:w-[91%] w-[100%] m-auto md:flex justify-between'>
        <div className='hidden md:w-[70%] md:inline w-[90%] m-auto '>
        <Slider {...settings} className="md:mt-6">
          {slider.map((item,idx) => (
            <img key={idx + 1} className="rounded-[20px] md:h-[390px] h-[220px]"
            src={item.image} alt="slider" />
          ))}
          
          </Slider>
          </div>
          <div className='md:w-[25%] w-[100%] m-auto mt-3 relative'>
          <img className='rounded-[20px] w-[90%] m-auto md:h-[390px] h-[280px] md:mt-2'
          src={require("../assets/slider/4.png")} alt="slider" />
          <Timer/>
        </div>
    </div>
  )
}

export default Sliders