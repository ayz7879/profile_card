import { useState } from 'react'
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
