import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import SimilarCar from './SimilarCar';
import sellerImg from '../img/sellerImg.png';

function ViewDetail() {
  const [viewData, setViewData] = useState([]);
  const [carSize, setCarSize] = useState('');
  const [carName , setCarName] = useState('');
  const urlParams = new URL(window.location.href);
  const urlSearchParams = urlParams.searchParams;
  const substationnumber = urlSearchParams.get('Substationnumber');
  console.log(substationnumber);

  const reqViewDetails = async () => {
    const req = await axios.get(`/api/viewdetail/` + substationnumber)
    console.log(req.data[0])
    const reqData = req.data;
    console.log(reqData[0].modelname);
    setCarName(reqData[0].modelname);
    const postView = reqData.map(data => (
      <div key={data.Substationnumber} className="w-4/5 h-full m-auto text-center bg-white pb-4 rounded-lg">
        <div className='w-10/12 h-4/5 pt-6 m-auto '>
          <img src={data.carimage} className='w-full h-full relative rounded-lg' />
        </div>
        <div className='bg-white flex flex-row justify-around w-full m-auto'>
          <div className='bg-white w-5/12 h-80 p-6'>
            <p className='text-3xl'>{data.modelname}</p>
            <p className='mt-2'>{data.modelyear}</p>
            <div className='bg-white w-full h-3/5 mt-4 bg-white'>
              <img src={sellerImg} className='w-24 h-24 mt-4 ml-2 float-left'/>
              <div className='sellerinfo w-3/5 h-3/5 float-right m-4 text-left border-2 border-slate-400'>
              <p className='p-1'>현대 모비스 오토벨 검증 딜러</p>
              <p className='p-1'>홍길동</p>
              <p className='p-1'>010-1234-5678</p>
              <p className='mt-2'><i className="fa-solid fa-star text-yellow-300"></i>우수사원<i className="fa-solid fa-star text-yellow-300"></i></p>
              </div>
            </div>
          </div>
          <div className='bg-white w-5/12 h-full p-6'>
            <p className='text-3xl mb-4 m-auto'>상세정보</p>
            <div className='w-11/12 m-auto bg-zinc-200'>
              <p className='text-sm border-b-2 border-neutral-50'>{data.mileage}km</p>
              <p className='text-sm border-b-2 border-neutral-50'>{data.seg}</p>
              <p className='text-sm border-b-2 border-neutral-50'>{data.size}</p>
              <p className='text-sm border-b-2 border-neutral-50'>{data.licenseplate}</p>
              <p className='text-sm border-b-2 border-neutral-50'>{data.Substationnumber}</p>
              <p className='text-sm border-b-2 border-neutral-50'>{data.color}</p>
            </div>
            <div className= 'w-11/12 h-24 pt-6 m-auto mt-2 mb-2 text-sm border-2 border-neutral-50'>
              <p>
                이 차량은 오토벨의 경험과 노하우로<br/>
                112가지 차량 진단이 완료된 차량입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    ))
    setViewData(postView);
    setCarSize(reqData[0].size);
  }

  useEffect(() => {
    reqViewDetails()
  }, [])
  return (
    <div className='h-100vh'>
      <Navbar />
      <div className='w-4/5 m-auto pt-4 h-100vh bg-blue-400 rounded-t-lg'>
        {viewData}
      </div>
      <div className='w-4/5 m-auto h-100vh bg-blue-400 pb-12 rouded-b-lg'>
        <SimilarCar substationnumber={substationnumber}
        carName={carName}/>
      </div>
    </div>

  )
}

export default ViewDetail;