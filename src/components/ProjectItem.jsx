import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="roun ded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="tect-2xl font-bld text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center">React Js</p>
        <a href="/">
            <p className="text-center rounded-lg p-3 bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info</p>     
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
