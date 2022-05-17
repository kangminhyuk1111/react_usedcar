import { React, useEffect, useState } from 'react'
import CarList from './CarList'
import DetailSearch from './DetailSearch';
import Pagination from './Pagination'

export default function Main(props) {
  console.log(props.usedCarList);
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicePosts, setSlicePosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const currentPost = (posts) => {
    const lastIdx = postPerPage * currentPage;
    const firstIdx = lastIdx - postPerPage;
    const slicePost = props.usedCarList.slice(firstIdx, lastIdx);
    return slicePost;
  }

  const inputChange = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const postSearchText = () => {
    console.log(searchText)
    window.location.href = `/search?carName=${searchText}`
  }

  useEffect(()=>{
  },)

  return (
    <div className='main'>
      <div className='header'>
        중고차 페이지
        <div className='search_form'>
        <input type='text' onChange={inputChange} name='searchText'/>
        <button onClick={postSearchText}>검색</button>
        </div>
        <p>전체 {props.usedCarList.length}대</p>
      </div>
      <CarList currentPost={currentPost(props.usedCarList)} />
      <Pagination usedCarList={props.usedCarList}
        currentPost={currentPost}
        setCurrentPage={setCurrentPage} />
      <DetailSearch/>
    </div>
  )
}
