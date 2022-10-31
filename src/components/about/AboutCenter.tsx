import React from 'react'
import Slider from "react-slick";
import { aboutSlick } from '../../data';

const AboutCenter : React.FC  = () => {
  var settings = {
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='bg-white rounded-[20px] shadow mb-5'>
    <Slider {...settings}>
      {
        aboutSlick.map((item,idx) => (
      <div className='py-3 px-5' key={idx + 1}>
        <img className='w-[120px] h-[80px] '
         src={item.image} alt="brands" />
      </div>
        ))
      }
    </Slider>
  </div>
  )
}

export default AboutCenter