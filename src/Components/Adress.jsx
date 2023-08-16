import React from 'react'
import './adress.css'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'


import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/pngtwitter.png'
import Contact from './Contact'
function Adress() {
    return (
        <div className='adress-section'>
            <h1>Get in touch </h1>
            <div className="card-container">
                <div className='card'><IoCall />+91 951545124</div>
                <div className='card'><HiOutlineOfficeBuilding />Baroda, India</div>
                <div className='card'><AiOutlineMail />dummy@gmail.com</div>
            </div>
            <div className="message-container">
                <h1>Want to ask Something?</h1>
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email' required />
                <textarea type="text" cols={10}   placeholder='Enter your message'></textarea>
                <button>Send Message</button>
            </div>
            <div style={{margin:'13px 0px'}}>or DM us direct at</div>
            <div className="socials">
                <a href="/"><img src={linkedin} alt="linkedin" /></a>
                <a href="/"><img src={facebook} alt="facebook" /></a>
                <a href="/"><img src={twitter} alt="twitter" /></a>
            </div>
            <Contact/>
        </div>
    )
}
export default Adress
