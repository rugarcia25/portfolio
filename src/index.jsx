import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Skills />
    <Projects />
    <Contact />
  </React.StrictMode>
);
