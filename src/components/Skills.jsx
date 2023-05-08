import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className="text-[32px] font-bold text-white">
        <span className="text-[#9BA4ED]">My</span> Skills
      </h1>
      <div className="bg-[#1A1A1AE5] bg-opacity-70  rounded-xl flex flex-wrap justify-center sm:w-full md:w-320  md:justify-evenly md:gap-3 md:flex-wrap">
        <div className=" w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-[200px] h-[200px]"
            src="https://img.icons8.com/color/512/html-5--v1.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center">HTML</p>
        </div>

        <div className=" w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-[160px] h-[160px] bg-cover "
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center">CSS</p>
        </div>

        <div className=" w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-[160px] h-[160px] bg-cover "
            src="https://play-lh.googleusercontent.com/IHMe-gJ6G4rf5-TVlDZOtcW-3EDBwJ4p2qomk86O6qkjjutl5ePczGmyqCDOvhGJ1w"
            alt=""
          />
          <p className="text-white text-[20px] text-center">Javascript</p>
        </div>

        <div className=" w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-[160px] h-[160px] bg-cover "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center">React</p>
        </div>

        <div className=" w-[250px] h-[250px] mb-5 bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-[160px] h-[160px] bg-cover "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center">TailwindCSS</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
