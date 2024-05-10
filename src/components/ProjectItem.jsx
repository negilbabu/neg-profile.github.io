/* eslint-disable react/prop-types */
// import React from "react";
import { useState, useEffect } from "react";

const ProjectItem = ({ imgList, title, technology, time }) => {
  const [currentImg, setCurrentImg] = useState(imgList[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImg((prevImg) => {
          const currentIndex = imgList.indexOf(prevImg);
          return imgList[
            currentIndex === imgList.length - 1 ? 0 : currentIndex + 1
          ];
        });
        setFade(true); // Start fade in
      }, time); // Delay to sync with transition
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imgList, time]);

  return (
    <div className="relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#788ab8]">
      <img
        src={currentImg}
        alt="project"
        className={`rounded-xl transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        } group-hover:opacity-10`}
      />
      {/* Overlay for hover effect */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{technology}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
