import React from 'react'
import Contact from '../Components/Contact'
import img1 from "../assets/portfolio-page-1.webp"
import img2 from "../assets/portfolio-page-2.webp"
import img3 from "../assets/portfolio-page-3.webp"
import img4 from "../assets/portfolio-page-4.webp"
import img5 from "../assets/portfolio-page-5.webp"
import img6 from "../assets/portfolio-page-6.webp"
import img7 from "../assets/portfolio-page-7.webp"
import img8 from "../assets/portfolio-page-8.webp"
import img9 from "../assets/portfolio-page-9.webp"
import "./Portfolio.css"

function Portfolio() {
  return (
    <div>
      <h1 className='portfolio-header'>Portfolio</h1>

      <section className='portfolio-grid-section'>
        <h1>What Service You Will Get From Me</h1>
        <div>
          <img src={img1} alt='img-1'/>
          <img src={img2} alt='img-2'/>
          <img src={img3} alt='img-3'/>
          <img src={img4} alt='img-4'/>
          <img src={img5} alt='img-5'/>
          <img src={img6} alt='img-6'/>
          <img src={img7} alt='img-7'/>
          <img src={img8} alt='img-8'/>
          <img src={img9} alt='img-9'/>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default Portfolio