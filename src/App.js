import { useEffect, useRef, useState } from "react";

import './App.css';

import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/skills/Skills";
import VantaDotsBackground from "./components/VantaBackground";
import SplashScreen from "./components/splash_screen/SplashScreen";
import CustomCursor from "./components/custom_cursor/CustomCursor";

import retroFilter from './res/images/svg/retro-filter.svg';
import useWindowSize from "./hooks/useWindowSize";
import ContactModal from "./sections/contact/ContactModal";
import StatusMessage from "./components/status_message/StatusMessage";

export default function App() {

  const [isSplashScreen, setisSplashScreen] = useState(true);
  const isMobile = useWindowSize().width <= 600;

  const [isContactVisible, setIsContactVisible] = useState(false);

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div id="app">

      {/* HERO SECTION*/}
      <Hero
        ref={heroRef}
        setIsContactVisible={setIsContactVisible}
        isSplashScreen={isSplashScreen}
      />

      {/* SKILLS SECTION */}
      <Skills ref={skillsRef} />

      {/* PORTFOLIO SECTION */}
      <Portfolio ref={portfolioRef} />

      {/* ABOUT SECTION */}
      <About
        ref={aboutRef}
        setIsContactVisible={setIsContactVisible}
      />
      <div id='about-contact-container'>
        <span>LET'S BRING YOUR VISION TO LIFE</span>
        <h5>Turn your concepts into a distinctive and impactful brand.</h5>
        <button className='my-default-btn' onClick={() => setIsContactVisible(true)}>Let's Talk</button>
      </div>
      {
        !isMobile && <CustomCursor />
      }
      {
        isContactVisible && <ContactModal setIsContactVisible={setIsContactVisible} />
      }

    </div>
  )
}