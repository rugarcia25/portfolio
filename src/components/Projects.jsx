/* eslint-disable react/prop-types */
import imageGoodBoy from "../assets/goodboy.png";
import ageCalculator from "../assets/ageCalculator.png";
import newsletter from "../assets/newsletter.png";

const Projects = () => {
  return (
    <section id="proyectos" className="w-full h-full bg-[#303235] py-10">
      <h2 className="text-white text-4xl w-full text-center mb-8">Proyectos</h2>
      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-10 mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <div className="bg-[#1F2937] rounded-md px-6 py-8">
      <img
        className="w-[80%] md:w-[72%] lg:w-[72%] h-auto m-auto rounded-lg cursor-pointer opacity-50 transition duration-300 ease-in-out hover:opacity-100"
        src={image}
        alt={title}
      />
      <h2 className="text-center text-2xl font-semibold text-white mt-6">
        {title}
      </h2>
      <p className="pt-3 text-white text-center">{description}</p>
      <p className="pt-3 text-white text-center">
        {liveLink && (
          <>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-red-500 mr-3"
            >
              Live
            </a>{" "}
          </>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-red-500"
          >
            Github
          </a>
        )}
      </p>
    </div>
  );
};

const projects = [
  {
    title: "Good Boy",
    description: "Aplicación para la adopción de animales",
    image: imageGoodBoy,
    githubLink: "https://github.com/rugarcia25/TFG-GoodBoy",
  },
  {
    title: "Age Calculator",
    description: "Aplicación para calcular la edad",
    image: ageCalculator,
    liveLink: "https://rugarcia25.github.io/age-calculator-app-main/",
    githubLink: "https://github.com/rugarcia25/age-calculator-app-main",
  },
  {
    title: "Newsletter",
    description: "Aplicación para suscribirse a un newsletter",
    image: newsletter,
    liveLink:
      "https://rugarcia25.github.io/Newsletter-sign-up-form-with-success-message/",
    githubLink:
      "https://github.com/rugarcia25/Newsletter-sign-up-form-with-success-message",
  },
];

export default Projects;
