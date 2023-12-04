import image from "../assets/me.jpeg";
import imageBg from "../assets/bg.jpg";

const App = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen">
      <img
        src={imageBg}
        className="object-cover w-full h-full absolute top-0 left-0"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
        <div className="text-white flex flex-col items-center justify-center">
          <img
            src={image}
            className="rounded-full h-60 w-60 mb-5 md:mb-0"
            alt=""
          />
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl">FullStack Developer</h3>
            <h2 className="text-5xl pt-2 md:pt-5">Rubén García</h2>
            <p className="pt-2 md:pt-5 text-lg">
              ¡Hola! 👋 Soy un apasionado desarrollador web con una reciente
              graduación en Desarrollo de Aplicaciones Web.
            </p>

            <p className="pt-2 md:pt-3 text-lg">
              Me considero un
              <span className="text-amber-400 font-semibold text-xl">
                {" "}
                Desarrollador FullStack
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
