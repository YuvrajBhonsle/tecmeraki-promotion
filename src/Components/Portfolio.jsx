import React, { useState,  } from 'react';
import './Portfolio.css';

import portfolio1 from '../assets/portfolio1.webp'
import portfolio2 from '../assets/portfolio2.webp'
import portfolio3 from '../assets/portfolio3.webp'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; 
    let isMobile= window.innerWidth<1024;

  const handlePrevSlide = () => {
    // document.querySelectorAll('.myimg').style.transform='translateX(-10vw)'
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides-1 : prevSlide - 1));
    
};

const handleNextSlide = () => {
    // document.querySelectorAll('.myimg').style.transform='translateX(10vw)'
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides-1 ? 0 : prevSlide + 1));
    
   
  };
  // const disablePrevButton = currentSlide === 0;
  // const disableNextButton =(isMobile? currentSlide === totalSlides-1:currentSlide-2)
  return (
    <div className="carousel">
        <h1>My Portfolio</h1>
      <div className="slider"  style={{
          transform: `translateX(-${currentSlide * (isMobile ? 100 : 100/3)}%)`,
        }}>
        <div className="slide">
        <img className='myimg'  src={portfolio1} alt=""  />
        <img className='myimg'  src={portfolio2} alt=""  />
        <img className='myimg'  src={portfolio3} alt=""  />
        <img className='myimg'  src={portfolio1} alt=""  />
        </div>
      </div>
          <button    className="arrow-button left" onClick={handlePrevSlide}  > &lt;</button>
          <button    className="arrow-button right" onClick={handleNextSlide}  >  &gt;</button>
    </div>
  );
};

export default Carousel;
