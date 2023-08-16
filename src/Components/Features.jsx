import React from 'react';
import { useSpring, animated } from 'react-spring'; // Import from react-spring
import './Features.css';
import features_img from '../assets/benefits_img.webp';

function Features() {
  // Animate the Features section
  const featuresAnimation = useSpring({ opacity: 1, y: 0, from: { opacity: 0, y: -30 }, config: { duration: 600 } });

  // Animate the Benefits section
  const benefitsAnimation = useSpring({ opacity: 1, y: 0, from: { opacity: 0, y: -30 }, config: { duration: 600, delay: 200 } });

  // Animate the image
  const imageAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 600, delay: 400 } });

  return (
    <div className='features'>
      <h1>Features & Benefits</h1>
      <div className='features-content'>
        <animated.div className='features-section' style={featuresAnimation}>
          <h1>Features</h1>
          <ul>
            <li>Automation solutions for industrial processes</li>
            <li>IOT integration for efficient data collection and processing</li>
            <li>Networking services for seamless connectivity and communication</li>
            <li>Electrical and Instrumentation field work for installation and maintenance</li>
            <li>Customized solutions tailored to specific client needs and requirements</li>
          </ul>
        </animated.div>

        <animated.div className='benefits-section' style={benefitsAnimation}>
          <h1>Benefits</h1>
          <ul>
            <li>Efficient industrial processes through automation and IoT solutions</li>
            <li>Reliable networking services to ensure seamless communication between systems</li>
            <li>Skilled and experienced professionals for electrical and instrumentation field work</li>
            <li>Tailored solutions to meet the unique needs of each client</li>
            <li>Trusted by reputable companies such as SB Chemical, SB Protech, Aarti Papermill, and Coca Cola.</li>
          </ul>
        </animated.div>

        <animated.div className="features-img" style={imageAnimation}>
          <img src={features_img} alt="features-img" />
        </animated.div>

      </div>
    </div>
  )
}

export default Features;
