import React from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import './Services.css'
function Services() {
    return (
        <div className='Services' id='services'>
            <h1>Our Services </h1>
            <div className="services-section">
                <div className="services-container">
                    <img src={service1} alt="porrfolio1" />
                    <div className="services-content">

                    <h1>Industrial Automation Solutions</h1>
                    <h3>Our automation service streamlines your business processes and increases efficiency, allowing you to focus on growth and innovation</h3>
                    <a href="/">Read more</a>
                    </div>
                </div>
                <div className="services-container">
                    <img src={service2} alt="porrfolio1" />
                    <div className="services-content">

                    <h1>Advanced IOT & Networking Solutions</h1>
                    <h3>Our IoT/network services provide reliable and secure connectivity solutions for businesses seeking to optimize their operations and streamline their processes.</h3>
                    <a href="/">Read more</a>
                    </div>
                </div>
                <div className="services-container">
                    <img src={service3} alt="porrfolio1" />
                    <div className="services-content">

                    <h1>Industrial Electrical/Instrumentation Field Services</h1>
                    <h3>Our electrical and instrumentation field work services provide precise and reliable solutions to meet your industrial and commercial needs.</h3>
                    <a href="/">Read more</a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Services
