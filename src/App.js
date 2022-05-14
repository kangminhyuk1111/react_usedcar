import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Main from './pages/Main';
import Search from './pages/Search';
import ViewDetail from './pages/ViewDetail';
import './App.css';


function App() {
  const [usedCarList , setUsedCarList] = useState([
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
  ]);
  const [dbList , setDbList] = useState([]);

  const appUsedCarList = async(list) =>{
    await setDbList(list);
    await  console.log(dbList);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main appUsedCarList={appUsedCarList}/>}/>
        <Route path='/search' element={<Search list={usedCarList}/>}/>
        <Route path='/view' element={<ViewDetail/>}/>
      </Routes>
    </div>
  )
}

export default App;

