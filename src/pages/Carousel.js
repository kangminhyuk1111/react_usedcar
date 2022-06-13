import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';
import SimilarCar from './SimilarCar';

export default function Carousel(props){
      const [settings ,setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1
      })
      return (
        <div className='w-full h-96 bg-zinc-400 pb-6'>
          <h2> Single Item</h2>
          <Slider {...settings}>
              {props.mapData}
          </Slider>
        </div>
      );
}
