import React from "react";

const Section1 = () => {
  return (
    <div className="text-white mt-96 flex flex-col gap-8 ">
      <h1 className="text-[32px] font-bold">
        <span className="text-[#9BA4ED]">Hi!</span> I'am a FrontEnd Developer{" "}
      </h1>
      <div className="">
        <p className=" text-justify">
          I’m probably the most passionate developer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
        <button className=" border border-white px-4 py-1 rounded-md mt-5">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Section1;
