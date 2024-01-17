import React from 'react';
import "./Partners.css";
import Partnerss from '../../configurations/PlacementPartners/Partners';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='Partners'>
      <h2>Our Placement Partners</h2>
      <Slider className='slide' {...settings}>
      {Partnerss.map((logo, index) => (
        <div key={index} className='image'>
          <img src={logo.img} alt='Error in Loading' />
        </div>
      ))}
    </Slider>
    </div>
  )
}
