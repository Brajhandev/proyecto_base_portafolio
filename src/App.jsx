import React from "react";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className=" bg-black bg-fondo  bg-contain bg-no-repeat bg-right-top">
      <NavBar />
      <div className="w-full px-5 flex flex-col gap-10">
        <Section1 />
        <Skills/>
      </div>
    </div>
  );
};

export default App;
