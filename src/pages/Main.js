import { React, useEffect, useState } from 'react'
import CarList from './CarList'
import Pagination from './Pagination'

export default function Main(props) {
  const [usedCarList, setUsedCarList] = useState([
    { num: 1, name: '그랜저1', fuel: 'dsel' },
    { num: 2, name: '그랜저2', fuel: 'dsel' },
    { num: 3, name: '그랜저3', fuel: 'dsel' },
    { num: 4, name: '그랜저4', fuel: 'dsel' },
    { num: 5, name: '그랜저5', fuel: 'dsel' },
    { num: 6, name: '그랜저6', fuel: 'dsel' },
    { num: 7, name: '그랜저7', fuel: 'dsel' },
    { num: 8, name: '그랜저8', fuel: 'dsel' },
    { num: 9, name: '그랜저9', fuel: 'dsel' },
    { num: 10, name: '그랜저10', fuel: 'dsel' },
    { num: 11, name: '그랜저11', fuel: 'dsel' },
    { num: 12, name: '그랜저12', fuel: 'dsel' },
    { num: 13, name: '그랜저13', fuel: 'dsel' },
    { num: 14, name: '그랜저14', fuel: 'dsel' },
    { num: 15, name: '그랜저15', fuel: 'dsel' },
    { num: 16, name: '그랜저16', fuel: 'dsel' },
  ])
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicePosts, setSlicePosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const currentPost = (posts) => {
    const lastIdx = postPerPage * currentPage;
    const firstIdx = lastIdx - postPerPage;
    const slicePost = usedCarList.slice(firstIdx, lastIdx);
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
    props.appUsedCarList(usedCarList);
  },)

  return (
    <div className='main'>
      <div className='header'>
        중고차 페이지
        <div className='search_form'>
        <input type='text' onChange={inputChange} name='searchText'/>
        <button onClick={postSearchText}>검색</button>
        </div>
      </div>
      <CarList currentPost={currentPost(usedCarList)} />
      <Pagination usedCarList={usedCarList}
        currentPost={currentPost}
        setCurrentPage={setCurrentPage} />
    </div>
  )
}
