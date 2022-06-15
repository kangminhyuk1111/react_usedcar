import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import ViewDetail from './pages/ViewDetail';
import './App.css';
import Carusel from './pages/Carousel';
import SellCar from './pages/SellCar';

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

  const appDetailSearchData = (data) =>{
    console.log(data);
    setUsedCarList(data);
  }

  useEffect(()=>{
    resData()
  },[])

  return (
    <div>
      <Routes>
        <Route path='/react_usedcar/' element={<Main usedCarList={usedCarList}
        postSearchData={postSearchData}
        appDetailSearchData={appDetailSearchData}/>}/>
        <Route path='/react_usedcar/view' element={<ViewDetail/>}/>
        <Route path='/card' element={<Carusel/>}/>
        <Route path='/react_usedcar/sellcar' element={<SellCar/>}/>
      </Routes> 
    </div>
  )
}

export default App;

