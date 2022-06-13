import { React, useEffect, useState } from 'react'
import CarList from './CarList'
import DetailSearch from './DetailSearch';
import Pagination from './Pagination'
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';

export default function Main(props) {
  console.log(props.usedCarList);
  const [postPerPage, setPostPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicePosts, setSlicePosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const currentPost = (posts) => {
    const lastIdx = postPerPage * currentPage;
    const firstIdx = lastIdx - postPerPage;
    const slicePost = props.usedCarList.slice(firstIdx, lastIdx);
    console.log(slicePost);
    return slicePost;
  }

  const inputChange = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const searchData = async () => {
    const req = await axios.get('/api/searchData/' + searchText);
    const reqData = req.data;
    console.log(reqData);
    props.postSearchData(reqData)
  }

  const detailSearchData = (data) => {
    props.appDetailSearchData(data);
  }

  useEffect(() => {
  })

  return (
    <div className='main'>
      <Navbar/>
      <div className='header'>
        <h2>SMART FINDER</h2>
        <div className='search_form'>
          <input className='search_input' type='text' onChange={inputChange} name='searchText' 
          placeholder='브랜드, 제품명을 검색해 보세요.'/>
          <button className='search_btn' onClick={searchData}>검색</button>
        </div>
      </div>
      <div className='content'>
        <div className='content_search'>
          <DetailSearch detailSearchData={detailSearchData} />
        </div>
        <div className='content_search_view'>
          <div className='commons'>
            <Card/>
          </div>
          <p className='inner_line'></p>
          <span className='view_count'>
            <p className='pt-4 text-xl font-bold'>라이브 스튜디오</p><p className='pt-6 text-xs'>오토벨이 직접 진단한 차량을 홈서비스 신청할 수 있는 차량입니다.</p>
            <Pagination usedCarList={props.usedCarList}
            currentPost={currentPost}
            setCurrentPage={setCurrentPage} />
          </span>
          <CarList currentPost={currentPost(props.usedCarList)} />
        </div>
      </div>

    </div>
  )
}
