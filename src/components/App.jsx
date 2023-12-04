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
      <div className="absolute inset-0 flex items-center justify-center h-full">
        <div className="text-white text-center max-w-2xl mx-auto md:flex md:items-center">
          <div className="md:w-2/3 md:pr-8">
            <h3 className="text-2xl">FullStack Developer</h3>
            <h2 className="text-5xl pt-2 md:pt-5">Rubén García</h2>
            <p className="pt-2 md:pt-3 text-lg">
              ¡Hola! 👋 Soy un entusiasta desarrollador, recién graduado en
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
          </div>
          <div className="md:w-1/3">
            <img
              src={image}
              className="rounded-full h-auto w-80 md:ml-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
