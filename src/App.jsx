import React from "react";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className=" bg-black ">
      <NavBar />
      <div className="w-full px-5 flex flex-col gap-10 items-center justify-center">
        <Section1 />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
