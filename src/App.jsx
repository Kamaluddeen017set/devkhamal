import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  // const [displayHeader, setDisplayHeader] = useState(false);

  return (
    <>
      <Navbar /> <ThemeToggle />
      <Slider />
      <Hero />
      <SocialIcons />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
