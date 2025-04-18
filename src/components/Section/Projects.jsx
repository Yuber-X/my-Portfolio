import { RevealOnScroll } from "../RevealOnScroll";
import { useRef } from "react";
import colorSharp from "../../assets/img/color-sharp2.png"

export const Projects = () => {

  const bgRef = useRef(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
                      <div
                        ref={bgRef}
                        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"
                        style={{
                          backgroundImage: `url(${colorSharp})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center 0px",
                          transition: "background-position 0.1s linear",
                        }}
                      />

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Punto de Venta | PV-300</h3>
              <p className="text-gray-400 mb-4">
                Sistema de Inventario y Venta unicamente para el administrador, enfocado en su simplicidad. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C#", "WindowsForm", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Yuber-X/PTV-300"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Página de Evento | Rock & EDM Festival</h3>
              <p className="text-gray-400 mb-4">
                Pagina enfocada en protagonizar un evento esperado.
                Se enfatizó que solo mostrara información, pero a la vez sea atractivo visualmente con colores cálidos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Gulp", "Bootstrap", "Jasmine"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://rock-festival-edm.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Página de Ventas | GuitarLa</h3>
              <p className="text-gray-400 mb-4">
                Pagina de Prueba creada con la finalidad de probar React.js.
                En su creación, preferí darle un toque llamativo y digno a una de mis hobbies favoritos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript",].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://guitar-la-yu.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Página de Blogs | BlogDeCafe</h3>
              <p className="text-gray-400 mb-4">
                 Pagina de blogs editable y escalable. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "Gulp", "Bootstrap"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://cafe-blog-yuberkill.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};