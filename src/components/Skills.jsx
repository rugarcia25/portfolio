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
      <h2 className="text-white text-4xl w-full text-center">Tecnologías</h2>
      <h3 className="text-white w-full text-center"></h3>
      <div className="grid gap-10 grid-cols-4 grid-rows-2 py-10 w-[50%] m-auto px-4">
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img className="w-[100px] m-auto" src={imageHtml} alt="HTML 5"></img>
          <p className="text-center text-white mt-6">HTML 5</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img className="w-[100px] m-auto" src={imageCss} alt="CSS"></img>
          <p className="text-center text-white mt-6">CSS</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[100px] m-auto pt-0.5"
            src={imagePhp}
            alt="PHP"
          ></img>
          <p className="text-center text-white mt-6">PHP</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[100px] m-auto"
            src={imageLaravel}
            alt="Laravel"
          ></img>
          <p className="text-center text-white mt-6">Laravel</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[100px] m-auto mt-1"
            src={imageJs}
            alt="JavaScript"
          ></img>
          <p className="text-center text-white mt-6">JavaScript</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[105px] m-auto mt-3"
            src={imageReact}
            alt="React Js"
          ></img>
          <p className="text-center text-white mt-6">React Js</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[100px] m-auto"
            src={imageNjode}
            alt="Node Js"
          ></img>
          <p className="text-center text-white mt-4">Node Js</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-md px-6 py-6 hover:scale-105 duration-200">
          <img
            className="w-[150px] m-auto"
            src={imageTailwind}
            alt="Tailwind CSS"
          ></img>
          <p className="text-center text-white mt-8">Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
