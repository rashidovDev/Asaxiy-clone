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
    <div className='md:w-[90%] m-auto mt-4 flex justify-between'>
        <div className='md:w-[73%]'>
        <Slider {...settings}>
          {slider.map((item,idx) => (
            <img key={idx + 1} className="rounded-[20px] h-[390px]"
            src={item.image} alt="slider" />
          ))}
        </Slider>
        </div>
        <div className='md:w-[25%] relative'>
          <img className='rounded-[20px] h-[390px]'
          src={require("../assets/slider/4.png")} alt="slider" />
          <Timer/>
        </div>
    </div>
  )
}

export default Sliders