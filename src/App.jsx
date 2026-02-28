import { useState, useEffect } from "react";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MacbookIntro from "./components/MacbookIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      if (e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "ultra-smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  if (showIntro) {
    return <MacbookIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="portfolio-app">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <BottomNavbar />
    </div>
  );
}

export default App;
