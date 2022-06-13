import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel';

export default function SimilarCar(props) {
  const [carSize, setCarSize] = useState([]);
  const [mapData, setMapData] = useState();
  const similarCarData = async () => {
    const res = await axios.get(`/api/similarCars/${props.substationnumber}`);
    console.log(res.data)
    const resData = res.data;
    console.log(resData);
    const mapData = resData.map((data, idx) => (
      <div className='w-1/5 h-72 mt-8 rounded-lg p-4'>
        <img src={data.carimage} className='h-56 rounded-lg' />
        <div className='flex flex-row justify-around'>
          <p className='text-sm border-b-1.5 border-neutral-50 p-2'>{data.modelname}</p>
          <p className='text-sm border-b-1.5 border-neutral-50 p-2'>{data.seg}</p>
          <p className='text-sm border-b-0.5 border-neutral-50 p-2'>{data.mileage}km</p>
        </div>
      </div>
    ))
    setMapData(mapData);
  }
  useEffect(() => {
    similarCarData()
  }, [])
  return (
    <div className='w-4/5 h-full m-auto flex flex-row flex-wrap justify-center'>
      <Carousel mapData={mapData} />
    </div>
  )
}
