import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Projects />
    <Skills />
    <Contact />
  </React.StrictMode>
);
