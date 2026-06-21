import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationCert from "./components/EducationCert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./theme.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("sky"); // "sky" | "dark"

  return (
    <div data-theme={theme} className="app-root">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <EducationCert theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
