import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] =useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)}src={assets.cross_icon}alt=''/>
        </div>
        <div  className='login-popup-inputs'> 
        {currState==='Login'?<></> : <input type='text'placeholder='Your name'/>}
        
        <input type='email' placeholder='Your email' />
        <input type='password' placeholder='password '/>
        </div>
        <button>{currState==='Sign Up'?"Creat an account": "Login"}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        : <p>Aready have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>  
    </div>
  )
}

export default LoginPopup