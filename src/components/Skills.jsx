/* eslint-disable react/prop-types */
import imageHtml from "../assets/html.png";
import imageCss from "../assets/css.png";
import imagePhp from "../assets/php.jpg";
import imageJs from "../assets/js.png";
import imageLaravel from "../assets/laravel.png";
import imageReact from "../assets/react.png";
import imageNjode from "../assets/nodejs.png";
import imageTailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <section id="skills" className="w-full h-full bg-gray-800 py-10">
      <h2 className="text-white text-4xl w-full text-center mb-8">
        Tecnologías
      </h2>
      <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 mx-auto max-w-6xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ image, alt, name }) => {
  return (
    <div className="bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
      <img className="w-[100px] md:w-[150px] m-auto" src={image} alt={alt} />
      <p className="text-center text-white mt-4">{name}</p>
    </div>
  );
};

const skills = [
  { name: "HTML 5", image: imageHtml, alt: "HTML 5" },
  { name: "CSS", image: imageCss, alt: "CSS" },
  { name: "PHP", image: imagePhp, alt: "PHP" },
  { name: "Laravel", image: imageLaravel, alt: "Laravel" },
  { name: "JavaScript", image: imageJs, alt: "JavaScript" },
  { name: "React Js", image: imageReact, alt: "React Js" },
  { name: "Node Js", image: imageNjode, alt: "Node Js" },
  { name: "Tailwind CSS", image: imageTailwind, alt: "Tailwind CSS" },
];

export default Skills;
