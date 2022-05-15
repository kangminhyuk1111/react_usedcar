import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Search(props) {
    console.log(props.list)
    const [searchPost , setSearchPost] = useState([]);
    const urlParams = new URL(window.location.href);
    const urlSearchParams = urlParams.searchParams;
    const carName = urlSearchParams.get('carName');
    console.log(carName);

    const viewDetail = (name) =>{
      window.location.href = `/view?Substationnumber=${name}`
    }

    const searchData = async() =>{
      const req = await axios.get('/api/searchData/'+carName);
      console.log(req.data[0]);
      const reqData = req.data;
      const postList = reqData.map((data, index) => (
        <div key={index} className="carlist">
          <div className='imgdiv'>
            <img src={data.carimage} className='innerimg'/>
          </div>
          <div className='carinfo'>
            <p><label>연식</label><br/>{data.modelyear}</p>
            <p><label>차량명</label><br/>{data.modelname}</p>
            <p><label>일련번호</label><br/>{data.Substationnumber}</p>
            <p><label>차량번호</label><br/>{data.licenseplate}</p>
            <p><label>주행거리</label><br/>{data.mileage}</p>
            <p><label>색상</label><br/>{data.color}</p>
            <a onClick={()=>viewDetail(data.Substationnumber)}>상세정보</a>
          </div>
        </div>
      ))
      setSearchPost(postList);
    }

    useEffect(()=>{
      searchData()
    },[])

  return (
    <div className='search_list'>
      {carName}에 대한 검색결과입니다.
        {searchPost}
    </div>
  )
}
