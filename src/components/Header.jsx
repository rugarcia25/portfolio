import "../index.css";
import pdf from "../assets/CV_Ruben.pdf";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="z-[10] top-0 bg-gray-800 text-gray-300 p-3">
      <header>
        <ul className="flex items-center gap-10 justify-center">
          <li className="flex items-center cursor-pointer hover:underline gap-2">
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <line x1="19" y1="7" x2="19" y2="10" />
              <line x1="19" y1="14" x2="19" y2="14.01" />
            </svg>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              href="#skills"
            >
              Tecnologías
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:underline gap-2">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <Link
              to="proyectos"
              spy={true}
              smooth={true}
              duration={500}
              href="#proyectos"
            >
              Proyectos
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:underline gap-2">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              href="#contact"
            >
              Contacto
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:underline gap-2">
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 12 16 16 12" />
              <line x1="12" y1="8" x2="12" y2="16" />
            </svg>
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              Cv
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
