import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Client from "./Client";
import Contact from "./Contact";

function useFadeInAnimation(inView) {
  return useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 30,
    from: { opacity: 0, y: 30 },
    config: { duration: 600 },
  });
}

function Homepage() {
  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });
  const [portfolioRef, portfolioInView] = useInView({
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
  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0,
    trackVisibility: true,
    delay: 400,
  });

  return (
    <div>
      <animated.div ref={homeRef} style={useFadeInAnimation(homeInView)}>
        <Hero />
      </animated.div>

      <animated.div ref={featuresRef} style={useFadeInAnimation(featuresInView)}>
        <Features />
      </animated.div>

      <animated.div ref={servicesRef} style={useFadeInAnimation(servicesInView)}>
        <Services />
      </animated.div>

      <animated.div ref={portfolioRef} style={useFadeInAnimation(portfolioInView)}>
        <Portfolio />
      </animated.div>

      <animated.div ref={clientRef} style={useFadeInAnimation(clientInView)}>
        <Client />
      </animated.div>

      <animated.div ref={contactRef} style={useFadeInAnimation(contactInView)}>
        <Contact />
      </animated.div>
    </div>
  );
}

export default Homepage;
