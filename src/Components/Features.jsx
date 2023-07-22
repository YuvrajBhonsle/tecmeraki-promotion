import React from 'react'
import './Features.css'
import features_img from '../assets/benefits_img.webp'
function Features() {
    return (
        <div className='features'>

            <h1>Features & Benefits</h1>

            <div className='features-content'>

                <div className='features-section'>
                    <h1>Features</h1>
                    <ul>
                        <li>Automation solutions for industrial processes</li>
                        <li>IOT integration for efficient data collection and processing</li>
                        <li>Networking services for seamless connectivity and communication</li>
                        <li>Electrical and Instrumentation field work for installation and maintenance</li>
                        <li>Customized solutions tailored to specific client needs and requirements</li>
                    </ul>
                </div>

                <div className='benefits-section'>
                    <h1>Benefits</h1>
                    <ul>
                        <li>Efficient industrial processes through automation and IoT solutions</li>
                        <li>Reliable networking services to ensure seamless communication between systems</li>
                        <li>Skilled and experienced professionals for electrical and instrumentation field work</li>
                        <li>Tailored solutions to meet the unique needs of each client</li>
                        <li>Trusted by reputable companies such as SB Chemical, SB Protech, Aarti Papermill, and Coca Cola.</li>
                    </ul>
                </div>
                <div className="features-img">
                    <img src={features_img} alt="features-img" />
                </div>
            </div>
        </div>
    )
}

export default Features
