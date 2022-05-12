import React, { useState } from 'react'

export default function Search(props) {
    console.log(props)
    const urlParams = new URL(window.location.href);
    const urlSearchParams = urlParams.searchParams;
    const carName = urlSearchParams.get('carName');
    console.log(carName);
  return (
    <div className='search_list'>
        {carName}에 대한 검색결과입니다.
    </div>
  )
}
