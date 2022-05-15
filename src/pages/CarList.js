import React, { useState } from 'react'

export default function CarList(props) {
  console.log(props.currentPost)

  const viewDetail = (name) => {
    window.location.href = `/view?Substationnumber=${name}`
  }

  const postList = props.currentPost.map((data, index) => (
    <div key={index} className="carlist">
      <div className='imgdiv'>
        <img src={data.carimage} className='innerimg' />
      </div>
      <div className='carinfo'>
        <h2>{data.modelname}</h2>
        <p className='carinfo_detail'>
          <p>{data.modelyear}</p>
          <p>{data.licenseplate}</p>
          <p>{data.fuel}</p>
        </p>
        <a onClick={() => viewDetail(data.Substationnumber)}>상세정보</a>
        <div className='car_price'>
          <h4>{data.price}만원</h4>
        </div>
      </div>
    </div>
  ))

  return (
    <div className='usedcar_list'>
      {postList}
    </div>
  )
}
