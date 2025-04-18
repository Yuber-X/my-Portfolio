import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { Home } from "./components/Section/Home.jsx";
import { About } from "./components/Section/About.jsx";
import { Projects } from "./components/Section/Projects.jsx";
import { Contact } from "./components/Section/Contact.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.querySelector('.background-parallax');
      if (bg) {
        bg.style.backgroundPositionY = `${scrollY * 0.3}px`; // Efecto parallax lento
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        {/* FONDO PARALLAX */}
        <div 
          className="background-parallax"
          // style={{backgroundImage: `url(${bannerBg})`}}
        />

        {/* LOADING SCREEN */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

        {/* CONTENIDO PRINCIPAL */}
      <div
        className={`relative z-10 min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;


