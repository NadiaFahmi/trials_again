import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  const [showlogin,setShowLogin] =useState(false)
  return (
    <>
    {showlogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>   
    </div>
    <Footer/>
    </>
  
  )
}

export default App