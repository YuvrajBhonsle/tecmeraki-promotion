import React from 'react'
import Contact from './Contact'
import Client from './Client'
import './about.css'

import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/pngtwitter.png'
import storyimg from '../assets/aboutimg.webp'
function About() {
    return (
        <div className='about-section'>
            <h1>About us</h1>
            <div className="mission-section">

                <h3>Our Mission</h3>
                <div>___________________________</div>
                <p>At Tecmeraki, our mission is to provide innovative technological solutions that enhance the efficiency and productivity of our clients industrial operations. We strive to deliver exceptional services in the areas of automation, IOT, networking, and electrical/instrumentation field work. We are committed to building long-lasting relationships with our clients and exceeding their expectations with our expertise and professionalism.</p>

                <p>Lets talk with me.</p>
                <h4>contact@domain.com</h4>
                <div className="socials">
                    <a href="/"><img src={linkedin} alt="linkedin" /></a>
                    <a href="/"><img src={facebook} alt="insta" /></a>
                    <a href="/"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>

            <div className="stroy-section">
                <div className="story-info">

                    <h1>Team Story</h1>
                    <div>________________________</div>
                    <p>Tecmeraki was founded by a team of experienced professionals who shared a vision of providing cutting-edge technological solutions to industrial clients. With a combined experience of over 50 years, the team has successfully delivered projects across various industries, including chemical, paper, and beverage. Their focus on quality, innovation, and customer satisfaction has helped Tecmeraki establish itself as a trusted partner for industrial services.</p>
                    <button><a href="/">Download CV</a></button>
                </div>
                <div className="story-img">

                    <img src={storyimg} alt="" />
                </div>
            </div>
            <Client />
            <Contact />
        </div>
    )
}

export default About
