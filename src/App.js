import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import ViewDetail from './pages/ViewDetail';
import DetailSearch from './pages/DetailSearch';
import './App.css';


function App() {
  const [usedCarList , setUsedCarList] = useState([]);
  const [dbList , setDbList] = useState([]);

  const resData = async() =>{
    const res = await axios.get('/api/resdata')
    console.log(res.data);
    setUsedCarList(res.data);
  }

  const postSearchData = (searchData) =>{
    setUsedCarList(searchData)
  }

  useEffect(()=>{
    resData()
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main usedCarList={usedCarList}
        postSearchData={postSearchData}/>}/>
        <Route path='/view' element={<ViewDetail/>}/>
        <Route path='/' element={<DetailSearch/>}/>
      </Routes>
    </div>
  )
}

export default App;

