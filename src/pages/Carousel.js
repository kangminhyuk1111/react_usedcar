import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick/lib/slider';

export default function Carousel(props){
      const [settings ,setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1
      })
      return (
        <div className='w-full h-100vh'>
          <h1 className='text-center mt-6'>검색한 차량과 비슷한 차량들 입니다.</h1>
          <Slider {...settings}>
              {props.mapData}
          </Slider>
        </div>
      );
}
