import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ViewDetail() {
  const [viewData, setViewData] = useState([]);
  const urlParams = new URL(window.location.href);
  const urlSearchParams = urlParams.searchParams;
  const substationnumber = urlSearchParams.get('Substationnumber');
  console.log(substationnumber);

  const reqViewDetails = async () => {
    const req = await axios.get(`/api/viewdetail/` + substationnumber)
    console.log(req.data[0])
    const reqData = req.data;
    console.log(reqData);
    const postView = reqData.map(data => (
      <div key={data.Substationnumber}>
        <div className='imgdiv'>
          <img src={data.carimage} className='innerimg' />
        </div>
        <p>{data.modelname}</p>
        <p>{data.modelyear}</p>
        <p>{data.Substationnumber}</p>
        <p>{data.licenseplate}</p>
        <p>{data.color}</p>
        <p>{data.mileage}km</p>
      </div>
    ))
    setViewData(postView);
  }

  useEffect(() => {
    reqViewDetails()
  }, [])
  return (
    <div className='view_detail'>
      {viewData}
    </div>
  )
}

export default ViewDetail;