import React, { useState } from 'react'

export default function CarList(props) {
  console.log(props.currentPost)

  const viewDetail = (name) => {
    window.location.href = `/view?Substationnumber=${name}`
  }

  const postList = props.currentPost.map((data, index) => (
    <div key={index} className="carlist">
      <div className="card">
            <img src={data.carimage} alt={data.modelname}/>
              <div class="container">
                <h4 className='mt-2 font-bold'>{data.modelname}</h4>
                <span className='detail'>
                <p>{data.modelyear}</p>
                <p>{data.licenseplate}</p>
                <p>{data.fuel}</p>
                </span>
                <h4 className='font-semibold'>{data.price}만원</h4>
                <a onClick={() => viewDetail(data.Substationnumber)}>상세정보</a>
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
