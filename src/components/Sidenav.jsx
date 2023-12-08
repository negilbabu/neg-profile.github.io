import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {

    setNav(!nav);
    console.log("state changed",nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/470 z-20">
          <div className="flex flex-col items-center w-full md:w-[75%] lg:w-[50%] xl:w-[25%]">
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 p-2 cursor-pointer hover:scale-110 ease-in duration-200 mb-4"
            >
              <AiOutlineHome size={15} />
              <span className="pl-2 text-[12px]">Home</span>
            </a>
            <a
              onClick={handleNav}
              href="#work"
              className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 p-2 cursor-pointer hover:scale-110 ease-in duration-200 mb-4"
            >
              <GrProjects size={15} />
              <span className="pl-2 text-[12px]">Work</span>
            </a>
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 p-2 cursor-pointer hover:scale-110 ease-in duration-200 mb-4"
            >
              <BsPerson size={15} />
              <span className="pl-2 text-[12px]">Resume</span>
            </a>
            <a
              onClick={handleNav}
              href="#project"
              className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 p-2 cursor-pointer hover:scale-110 ease-in duration-200 mb-4"
            >
              <AiOutlineProject size={15} />
              <span className="pl-2 text-[12px]">Projects</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 p-2 cursor-pointer hover:scale-110 ease-in duration-200 mb-4"
            >
              <AiOutlineMail size={15} />
              <span className="pl-2 text-[12px]">Contact</span>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            title="Home"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineHome />
          </a>
          <a
            href="#work"
            title="Work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects />
          </a>
          <a
            href="#main"
            title="Resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson />
          </a>
          <a
            href="#project"
            title="Projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject />
          </a>
          <a
            href="#contact"
            title="Contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
