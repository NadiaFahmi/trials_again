import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
      <div className='footer-content-left'>
        <img src={assets.logo5} alt='' className='logo'/>
        <p> inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.

</p>
        <div className='footer-social-icons'>
          <img src={assets.facebook_icon} alt=''    />
          <img src={assets.twitter_icon} alt=''    />
          <img src={assets.linkedin_icon} alt=''    />   
        </div>

      </div>
      <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+0122 3949 395</li>
          <li>contact@Nadyetco.com</li>
        </ul>
      </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 20204 @ Nadyetco.com -All right reserved. Nadia Fahmi</p>
    </div>
  )
}

export default Footer