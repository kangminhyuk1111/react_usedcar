import React, { useState } from 'react'

export default function Search(props) {
    console.log(props.list)
    const urlParams = new URL(window.location.href);
    const urlSearchParams = urlParams.searchParams;
    const carName = urlSearchParams.get('carName');
    console.log(carName);

    const viewDetail = (name) =>{
      window.location.href = `/view?${name}`
      console.log(props.list)
    }

    const searchPost = props.list.map((data,index)=>(
      <div className='search_result' key={index}>
        <p>{data.num}</p>
        <p>{data.name}</p>
        <p>{data.fuel}</p>
        <a onClick={()=>viewDetail(data.name)}>상세정보</a>
      </div>
    ))
  return (
    <div className='search_list'>
        {searchPost}
    </div>
  )
}
