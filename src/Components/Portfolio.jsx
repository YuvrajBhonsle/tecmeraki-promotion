import React from 'react';
import './Portfolio.css';

import portfolio1 from '../assets/portfolio1.webp'
import portfolio2 from '../assets/portfolio2.webp'
import portfolio3 from '../assets/portfolio3.webp'

const Carousel = () => {
  return (
    <div className='portfolio-section'>
      <h1>My Portfolio</h1>
      <div className="images">
        <div className="image-slide">
          <a href="/"><img src={portfolio1} alt="" /></a>
          <a href="/"><img src={portfolio2} alt="" /></a>
          <a href="/"><img src={portfolio3} alt="" /></a>
        </div>
        <div className="image-slide">
          <a href="/"><img src={portfolio1} alt="" /></a>
          <a href="/"><img src={portfolio2} alt="" /></a>
          <a href="/"><img src={portfolio3} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
