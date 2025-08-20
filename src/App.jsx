import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import Technologies from "./components/Technologies";
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
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
