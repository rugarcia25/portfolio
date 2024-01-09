import image from "../images/me.webp";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

const App = () => {
  return (
    <div className="bg-gradient-to-tl from-[#1F2937] via-black to-[#1F2937] font-mono relative overflow-hidden w-full h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-center max-w-3xl mx-auto md:flex md:items-center">
          <div className="md:w-4/6 md:pr-10">
            <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 text-5xl font-bold pl-5 md:pt-5">
              <span className="text-amber-300">Rubén García</span>
            </h2>
            <p className="pt-2 md:pt-3 text-lg">
              ¡Hola! 👋 Soy desarrollador de aplicaciones Web.
            </p>
            <p className="pt-2 md:pt-3 text-lg">
              Me considero un desarrollador
              <span className="text-amber-300 font-semibold text-xl">
                {" "}
                Junior
              </span>
              , explorando el fascinante mundo de la programación cada día.
            </p>
            <div className="text-4xl text-red-200 flex items-center justify-center gap-5 md:flex md:items-center red-500 md:mt-6">
              <a
                className="hover:scale-125 duration-200 hover:bg-blue-600 hover:rounded-xl"
                rel="noreferrer"
                href="https://github.com/rugarcia25"
                target="_blank"
                aria-label="Abrir Github"
              >
                <BiLogoGithub />
              </a>
              <a
                className="hover:scale-125 duration-200 hover:bg-blue-600 hover:rounded-xl"
                rel="noreferrer"
                href="https://www.linkedin.com/in/garciarios-ruben/"
                target="_blank"
                aria-label="Abrir Linkedin"
              >
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:justify-end py-3">
            <img
              src={image}
              className="rounded-full h-auto w-60 md:ml-10 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
