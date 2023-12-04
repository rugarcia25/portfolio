import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-full bg-[#1F2937] py-10">
      <h2 className="text-white text-4xl w-full text-center mb-8">
        Contáctame
      </h2>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-center">
        <ContactLink
          href="https://github.com/rugarcia25"
          icon="github"
          label="GitHub"
        />
        <ContactLink
          href="https://www.linkedin.com/in/garciarios-ruben/"
          icon="linkedin"
          label="LinkedIn"
        />
        <ContactLink
          href="mailto:rgarciarios95@gmail.com"
          icon="mail"
          label="Correo"
        />
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link to="home" spy={true} smooth={true} duration={500} href="#home">
          <svg
            className="h-8 w-8 text-red-500 hover:scale-150 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="16 12 12 8 8 12" />
            <line x1="12" y1="16" x2="12" y2="8" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

const ContactLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      className="flex items-center hover:scale-125 duration-200 text-white"
    >
      {getIconComponent(icon)}
      <span className="ml-2">{label}</span>
    </a>
  );
};

const getIconComponent = (icon) => {
  switch (icon) {
    case "github":
      return (
        <svg
          className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 20v-6h-4v6h4zm-2-8a2 2 0 100-4 2 2 0 000 4z" />
          <path d="M21 20v-6h-4v1.5a1.5 1.5 0 0 1-3 0V14h-4v6h4v-3a3 3 0 0 1 6 0z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    default:
      return null;
  }
};

export default Contact;
