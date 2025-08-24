import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ThemeToggle />
      <Slider />
      <Hero />
      <SocialIcons />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
