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

export default function App() {

  const [isFlashScreen, setIsFlashScreen] = useState(true);
  const isMobile = useWindowSize().width <= 600;

  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const flashScreenTimeout = setTimeout(() => {
      setIsFlashScreen(false);
    }, 4500);

    return () => clearTimeout(flashScreenTimeout);

  }, []);


  return (
    <div id="app">
      {
        isFlashScreen ? <SplashScreen /> : <>
          <Hero setIsContactVisible={setIsContactVisible} />
          <Skills />
          <Portfolio />
          <About setIsContactVisible={setIsContactVisible} />
        </>
      }
      {
        !isMobile && <CustomCursor />
      }
      {
        isContactVisible && <ContactModal setIsContactVisible={setIsContactVisible} />
      }

    </div>
  )
}