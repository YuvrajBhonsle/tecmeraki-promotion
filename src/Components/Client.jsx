import React from 'react'
import './client.css'

import clientimg from '../assets/client1.webp'
function Client() {
  return (
    <div className='client-section'>
    <h1 className='client-section-h1'>What Our Clients Say</h1>
    <div className="client-container">
        <div className='client-card'>
            <img className='client-img' src={clientimg} alt="clientimg" />
            <p className='client-testimony'>Tecmeraki offers top-notch industrial solutions that have significantly improved our operational efficiency.</p>
            <h1>____</h1>
            <h3  className='client-name'>John Doe</h3>
        </div>
        <div className='client-card'>
            <img className='client-img' src={clientimg} alt="clientimg" />
            <p className='client-testimony'>Tecmeraki offers top-notch industrial solutions that have significantly improved our operational efficiency.</p>
            <h1>____</h1>
            <h3  className='client-name'>John Doe</h3>
        </div>
        <div className='client-card'>
            <img className='client-img' src={clientimg} alt="clientimg" />
            <p className='client-testimony'>Tecmeraki offers top-notch industrial solutions that have significantly improved our operational efficiency.</p>
            <h1>____</h1>
            <h3  className='client-name'>John Doe</h3>
        </div>
    </div>
</div>
  )
}

export default Client
