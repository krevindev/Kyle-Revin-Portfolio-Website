import { useEffect, useRef, useState } from "react";

import './App.css';

import About from "./sections/about/AboutSection";
import Hero from "./sections/hero/HeroSection";
import Portfolio from "./sections/portfolio/PortfolioSection";
import Skills from "./sections/skills/SkillsSection";
import VantaDotsBackground from "./components/VantaBackground";
import SplashScreen from "./components/splash_screen/SplashScreen";
import CustomCursor from "./components/custom_cursor/CustomCursor";

import retroFilter from './res/images/svg/retro-filter.svg';
import useWindowSize from "./hooks/useWindowSize";
import ContactModal from "./sections/contact/ContactModal";
import StatusMessage from "./components/status_message/StatusMessage";
import Footer from "./components/footer/Footer";
import AboutContactContainer from "./components/about_contact/AboutContactContainer";

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
      <AboutContactContainer setIsContactVisible={setIsContactVisible} />
      {
        !isMobile && <CustomCursor />
      }
      {
        isContactVisible && <ContactModal setIsContactVisible={setIsContactVisible} />
      }
      <Footer />
    </div>
  )
}