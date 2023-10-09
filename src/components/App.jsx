import image from "../assets/me.jpeg";
import imageBg from "../assets/bg.jpg";

const App = () => {
  return (
    <div className=" w-full h-screen">
      <img src={imageBg} className="top-0 left-0 w-full h-screen" alt=""></img>
      <div className="top-14 absolute flex flex-col items-center justify-center h-full w-full">
        <div className="text-white flex items-center justify-center ">
          <div>
            <img src={image} className="rounded-full h-60 w-60"></img>
          </div>
          <div className="text-white text-left sm:text-left ml-5">
            <h3 className="text-2xl">FullStack Developer</h3>
            <h2 className="text-5xl pt-5">Rubén García</h2>
            <p className="pt-5 text-lg">
              Hola!👋 Soy desarrollador web, graduado recientemente en
              Desarrollo de Aplicaciones Web.
            </p>
            <p className="text-lg">
              Me considero
              <span className="text-amber-400 font-semibold text-xl">
                {" "}
                FullStack
              </span>
              ,{" "}
              <span className="text-orange-400 font-semibold text-xl">
                Junior{" "}
              </span>
              sobretodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
