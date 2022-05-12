import React, { useState } from 'react'

export default function CarList(props) {
    const postList = props.currentPost.map((data,index)=>(
        <div key={index} className="carlist">
        <p>{data.num}</p>
        <p>{data.name}</p>
        <p>{data.fuel}</p>
        </div>
    ))
  return (
    <div className='usedcar_list'>
        {postList}
    </div>
  )
}
