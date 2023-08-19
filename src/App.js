import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './templets/components/home/home'
import Navbar from './templets/components/navbar/navbar'
import Login from './templets/components/login/login'
import './App.css'
import Model from './templets/components/Model/Model'

export default function App() {

  const [name ,setName] =useState("prajwal")
  return (<>
  <div>
    <Navbar/>
  </div>

  <div>
    <h1>{name}</h1>

  <Routes>
    <Route path='/' element={<Home name={name} setName ={setName}/>} />
    <Route path='/login' element={<Login name={name}/>} />
    <Route path='/model' element={<Model/>} />
  </Routes>
  </div>
  </>
    
  )
}
