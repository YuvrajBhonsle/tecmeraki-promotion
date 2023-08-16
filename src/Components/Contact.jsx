import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './contact.css';

function useFadeInAnimation(inView) {
  return useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 30,
    from: { opacity: 0, y: 30 },
    config: { duration: 600 },
  });
}

function Contact() {
  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  const handleClick = () => {
    let inputVal = document.getElementById("input");
    if (inputVal && inputVal.value) {
      document.getElementById("success").innerHTML = 'We have got your email!!! ';
      document.getElementById("error").innerHTML = '';
    } else {
      document.getElementById("error").innerHTML = 'Please enter your email!';
      document.getElementById("success").innerHTML = '';
    }
    console.log('clicked')
  };

  return (
    <animated.div className='contact-section' id='contact' ref={contactRef} style={useFadeInAnimation(contactInView)}>
      <div className="contact-container">
        <h1>Stay In Touch</h1>
        <p>Enter your email address to register to our newsletter subscription!</p>
        <input type="text" id='input' placeholder='Enter your email address' />
        <button onClick={handleClick}>Subscribe</button>
        <span id='success'></span>
        <span id='error'></span>
      </div>
    </animated.div>
  )
}

export default Contact;
