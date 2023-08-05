import Header from "./components/header/Header";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/skills/Skills";

export default function App() {
  return (
    <div id="app">
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <About />
    </div>
  )
}