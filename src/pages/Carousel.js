import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';

export default function Carousel(props){
    console.log(props.mapData)
      const [settings ,setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
      })
      return (
        <div className='w-full h-100vh'>
          <h1 className='text-center text-zinc-700 mt-6'><a className='text-2xl pr-1'>{props.carName}</a>와 비슷한 유형의 차량들</h1>
          <Slider {...settings}>
              {props.mapData}
          </Slider>
        </div>
      );
}
