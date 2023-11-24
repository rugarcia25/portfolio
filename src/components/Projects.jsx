import imageGoodBoy from "../assets/goodboy.png";
import ageCalculator from "../assets/ageCalculator.png";
import newsletter from "../assets/newsletter.png";

const Projects = () => {
  return (
    <section id="proyectos" className="w-full h-full bg-[#303235] py-10">
      <h2 className="text-white text-4xl w-full text-center">Proyectos</h2>
      <div className="grid gap-10 grid-cols-3 py-10 w-[70%] m-auto px-4">
        <div className="col-span-1 bg-[#1F2937] rounded-md px-6 py-8">
          <img
            className="w-[80%] m-auto rounded-lg hover:cursor-pointer opacity-50 transition duration-300 ease-in-out hover:opacity-100"
            src={imageGoodBoy}
            alt="Good Boy Project"
          ></img>
          <h2 className="text-center text-2xl font-semibold text-white mt-6">
            Good Boy
          </h2>
          <p className="pt-3 text-white text-center">
            Aplicación para la adopción de animales
          </p>
          <p className="pt-2 text-white text-center">
            <a
              target="_blank"
              href="https://github.com/rugarcia25/TFG-GoodBoy"
              rel="noreferrer"
              className="hover:cursor-pointer hover:underline text-red-500"
            >
              Github
            </a>
          </p>
        </div>
        <div className="col-span-1 bg-[#1F2937] rounded-md px-6 py-8">
          <img
            className="w-[72%] h-auto m-auto rounded-lg hover:cursor-pointer opacity-50 transition duration-300 ease-in-out hover:opacity-100"
            src={ageCalculator}
            alt="Aplicación para calcular la edad en ías, mes y año"
          ></img>
          <h2 className="text-center text-2xl font-semibold text-white mt-6">
            Age Calculator
          </h2>
          <p className="pt-3 text-white text-center">
            Aplicación para calcular la edad
          </p>
          <p className="pt-3 text-white text-center">
            <a
              target="_blank"
              href="https://rugarcia25.github.io/age-calculator-app-main/"
              rel="noreferrer"
              className="hover:cursor-pointer hover:underline text-red-500 mr-3"
            >
              Live
            </a>{" "}
            <a
              target="_blank"
              href="https://github.com/rugarcia25/age-calculator-app-main"
              rel="noreferrer"
              className="hover:cursor-pointer hover:underline text-red-500"
            >
              Github
            </a>
          </p>
        </div>
        <div className="col-span-1 bg-[#1F2937] rounded-md px-6 py-8">
          <img
            className="w-[72%] h-auto m-auto rounded-lg hover:cursor-pointer opacity-50 transition duration-300 ease-in-out hover:opacity-100"
            src={newsletter}
            alt="Aplicación para suscribirse a un newsletter"
          ></img>
          <h2 className="text-center text-2xl font-semibold text-white mt-6">
            Newsletter
          </h2>
          <p className="pt-3 text-white text-center">
            Aplicación para suscribirse a un newsletter
          </p>
          <p className="pt-3 text-white text-center">
            <a
              target="_blank"
              href="https://rugarcia25.github.io/Newsletter-sign-up-form-with-success-message/"
              rel="noreferrer"
              className="hover:cursor-pointer hover:underline text-red-500 mr-3"
            >
              Live
            </a>{" "}
            <a
              target="_blank"
              href="https://github.com/rugarcia25/Newsletter-sign-up-form-with-success-message"
              rel="noreferrer"
              className="hover:cursor-pointer hover:underline text-red-500"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
