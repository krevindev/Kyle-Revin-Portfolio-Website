import { useEffect, useRef } from "react";

import './App.css';

import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/skills/Skills";

export default function App() {

  return (
    <div id="app">
      <Hero />
      <Skills />
      <Portfolio />
      <About />
    </div>
  )
}