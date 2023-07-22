import React from 'react'
import './footer.css'

import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/pngtwitter.png'
import logo from '../assets/Logo.jpg'
function Footer() {
  return (
    <div className='footer-section'>
        <div className="socials">
            <img  id='facebook' src={facebook} alt="facebook" />
            <img  id='linkedin' src={linkedin} alt="linkedin" />
            <img id='twitter'  src={twitter} alt="twitter" />
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="contact-email">
            automation@gmail.com
        </div>
        <div className="copyright">
            all right reserved 2023 @ automation pvt. ltd. 
        </div>
    </div>
  )
}
export default Footer
