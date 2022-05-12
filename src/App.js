import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import Search from './pages/Search';
import './App.css';

function App() {
  const [usedCarList , setUsedCarList] = useState([]);
  const [dbList , setDbList] = useState([]);

  const resData = async() =>{
    console.log('app')
    const res = await axios.get('/api/');
  }

  const data = () =>{
    const res = axios.get('/resdata');
  }

  const appUsedCarList = (list) =>{
    console.log(list)
    setUsedCarList(list);
  }

  useEffect(()=>{
    resData();
    data();
  },)
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main appUsedCarList={appUsedCarList}/>}/>
        <Route path='/search' element={<Search list={usedCarList}/>}/>
      </Routes>
    </div>
  )
}

export default App;

