import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect, useRef } from "react";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/img/header-img.svg";
import bannerBg from "../../assets/img/banner-bg.png"

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0); // Índice de la palabra
  const [isDeleting, setIsDeleting] = useState(false); // ¿Está borrando?
  const [text, setText] = useState(""); // Texto visible
  const [delta, setDelta] = useState(150); // Velocidad
  const words = ["Web Developer", "Web Designer", "Software Developer"];
  const pauseTime = 2000; // Tiempo de pausa al terminar de escribir una palabra
  const bgRef = useRef(null); // Que renuncie a todo fondo

  // MAQUINA DE ESCRIBIR EFECTO
  useEffect(() => {
    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text]);

  const handleTyping = () => {
    const current = loopNum % words.length;
    const fullText = words[current];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseTime); // Pausa después de escribir toda la palabra
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(200); // Reinicia velocidad
    } else {
      setDelta(isDeleting ? 50 : 100); // Velocidad de borrado/escritura
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative banner">
            
      {/* FONDO PARALLAX dentro del home */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0 bg-fixed"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 0px",
          transition: "background-position 0.1s linear",
        }}
      />


      <TrackVisibility>
        {({ isVisible }) => (

          <div className={`text-center px-4 z-10 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hi! I'm Yuber<br />
              <span className="text-white underline decoration-blue-500">{text}</span>{/* Maquina de Script */}
              <span className="blinking-cursor">|</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              I'm a full-stack developer who enjoys building clean and scalable web applications.
              My goal is to create solutions that deliver optimal performance and an optimal user experience, while further improving my skills.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:scale-105 hover:shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:bg-blue-500/10 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </TrackVisibility>
      {/* Image flotante */}
      <TrackVisibility>
  {({ isVisible }) => (
    <div className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <img
        src={headerImg}
        alt="Header Img"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg animate-floating" // agregamos una clase tailwind + custom
      />
    </div>
  )}
</TrackVisibility>

    </section>
  );
};
