import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SimilarCar(props) {
  const [carSize, setCarSize] = useState([]);
  const [mapData, setMapData] = useState();
  const similarCarData = async () => {
    const res = await axios.get(`/api/similarCars/${props.substationnumber}`);
    console.log(res.data)
    const resData = res.data;
    console.log(resData);
    const mapData = resData.map((data, idx) => (
      <div className='w-1/5 h-full bg-zinc-200 mt-8 m-6 border-red-500 border-solid border-2'>
        <p>{data.size}</p>
      </div>
    ))
    setMapData(mapData);
  }
  useEffect(() => {
    similarCarData()
  }, [])
  return (
    <div className='w-4/5 h-72 m-auto flex flex-row flex-wrap justify-center overflow-hidden'>
      {mapData}
    </div>
  )
}
