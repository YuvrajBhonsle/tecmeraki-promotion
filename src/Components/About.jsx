import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Contact from './Contact';
import Client from './Client';
import './about.css';

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import storyimg from '../assets/aboutimg.webp';

function useFadeInAnimation(inView) {
  return useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 30,
    from: { opacity: 0, y: 30 },
    config: { duration: 600 },
  });
}

function About() {
  const [missionRef, missionInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  const [clientRef, clientInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  return (
    <div className='about-section'>
      <h1>About us</h1>
      <animated.div ref={missionRef} style={useFadeInAnimation(missionInView)}>
        {/* Wrap the mission-section with animated.div */}
        <div className='mission-section'>
          <h3>Our Mission</h3>
          <div>___________________________</div>
          <p>At Tecmeraki, our mission is to provide innovative technological solutions that enhance the efficiency and productivity of our clients industrial operations. We strive to deliver exceptional services in the areas of automation, IOT, networking, and electrical/instrumentation field work. We are committed to building long-lasting relationships with our clients and exceeding their expectations with our expertise and professionalism.</p>
          <p>Lets talk with me.</p>
          <h4>contact@domain.com</h4>
          <div className='socials'>
            <a href='/'><BsLinkedin style={{ color: "black", fontSize: "1.75rem" }} /></a>
            <a href='/'><BsInstagram style={{ color: "black", fontSize: "1.75rem" }} /></a>
            <a href='/'><BiSolidPhoneCall style={{ color: "black", fontSize: "1.75rem" }} /></a>
          </div>
        </div>
      </animated.div>

      <animated.div ref={storyRef} style={useFadeInAnimation(storyInView)}>
        {/* Wrap the story-container with animated.div */}
        <div className='story-container'>
          <div className='stroy-section'>
            <div className='story-info'>
              <h1>Team Story</h1>
              <div>________________________</div>
              <p>Tecmeraki was founded by a team of experienced professionals who shared a vision of providing cutting-edge technological solutions to industrial clients. With a combined experience of over 50 years, the team has successfully delivered projects across various industries, including chemical, paper, and beverage. Their focus on quality, innovation, and customer satisfaction has helped Tecmeraki establish itself as a trusted partner for industrial services.</p>
              {/* <button><a href="/">Download CV</a></button> */}
            </div>
            <div className='story-img'>
              <img src={storyimg} alt='' />
            </div>
          </div>
        </div>
      </animated.div>

      <animated.div ref={clientRef} style={useFadeInAnimation(clientInView)}>
      <section className='gray-bg'>
        <Client />
      </section>
      </animated.div>

      <animated.div ref={contactRef} style={useFadeInAnimation(contactInView)}>
      <section className='white-bg'>
        <Contact />
      </section>
      </animated.div>

    </div>
  );
}

export default About;
