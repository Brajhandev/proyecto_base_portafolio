import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const NavBar = () => {

  const [burguer, setburguer] = useState(false)

  return (
    <nav className=" h-20 flex justify-between items-center px-4">
      <div>
        <img src="./images/atomo.png" alt="" />
      </div>
      <ul className={burguer ? `fixed pt-5 top-[80px] flex flex-col items-center gap-14 left-0 bg-black w-full h-full text-white opacity-90 text-[20px]` : `hidden md:flex  md:text-white md:gap-6 lg:gap-8`}>
        <li>
          <a className=" hover:text-amber-500" href="">Home</a>
        </li>
        <li>
          <a className=" hover:text-amber-500" href="">Project</a>
        </li>
        <li>
          <a className=" hover:text-amber-500" href="">About Me</a>
        </li>
        <li>
          <a className=" hover:text-amber-500" href="">Contact Me</a>
        </li>
      </ul>
      <div className=" text-white text-2xl md:invisible cursor-pointer"
      onClick={()=>setburguer(!burguer)}>
        <HiBars3 />
      </div>
    </nav>
  );
};

export default NavBar;
