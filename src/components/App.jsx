import image from "../assets/me.webp";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

const App = () => {
  return (
    <div className="bg-[#303235] relative overflow-hidden w-full h-screen">
      <div className="absolute inset-0 flex items-center justify-center h-full">
        <div className="text-white text-center max-w-2xl mx-auto md:flex md:items-center">
          <div className="md:w-4/6 md:pr-8">
            <h3 className="text-3xl">FullStack Developer</h3>
            <h2 className="text-5xl pt-2 md:pt-5">Rubén García</h2>
            <p className="pt-2 md:pt-3 text-lg">
              ¡Hola! 👋 Soy un entusiasta desarrollador web, recién graduado en
              Desarrollo de Aplicaciones Web.
            </p>
            <p className="pt-2 md:pt-3 text-lg">
              Me considero un
              <span className="text-amber-400 font-semibold text-xl">
                {" "}
                Desarrollador Junior
              </span>
              , explorando el fascinante mundo de la programación y aprendiendo
              cada día.
            </p>
            <div className="text-4xl flex justify-center pt-3 gap-5 md:flex md:items-center red-500">
              <a
                className="hover:scale-125 duration-200"
                rel="noreferrer"
                href="https://github.com/rugarcia25"
                target="_blank"
                aria-label="Abrir Github"
              >
                <BiLogoGithub />
              </a>
              <a
                className="hover:scale-125 duration-200"
                rel="noreferrer"
                href="https://www.linkedin.com/in/garciarios-ruben/"
                target="_blank"
                aria-label="Abrir Linkedin"
              >
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex items-center justify-center md:justify-end py-3">
            <img
              src={image}
              className="rounded-full h-auto w-80 md:ml-10 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
