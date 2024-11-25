import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Bg0 from "../assets/Bg0.jpg";
import Bg3 from "../assets/Bg3.jpg";
import Bg4 from "../assets/Bg4.jpg";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  const [backgroundImages] = useState([Bg3, Bg0, Bg4]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Trigger transition before changing the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false); // Reset transition flag after changing the image
      }, 750); // Adjust the duration for the transition
    }, 10000);

    return () => clearInterval(intervalId);
  }, [backgroundImages]);

  const linkedinUrl = "https://www.linkedin.com/in/negil-babu/";
  const facebookUrl = "https://www.facebook.com/negil.babu/";
  const instagramUrl = "https://www.instagram.com/mr_intravelor/";
  const twitterUrl = "https://twitter.com/Negil_Babu";
  const gitUrl = "https://github.com/negilbabu";

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, "_blank");
  };
  const handleGitHubClick = () => {
    window.open(gitUrl, "_blank");
  };
  const handleFacebookClick = () => {
    window.open(facebookUrl, "_blank");
  };
  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };
  const handleTwitterClick = () => {
    window.open(twitterUrl, "_blank");
  };

  return (
    <div id="main">
      <div
        className={`w-full h-screen object-cover object-left relative transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: `url(${backgroundImages[currentImageIndex]}) center center / cover no-repeat`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute top-0 left-0"></div>
        <div className="max-w-[1040px] m-auto w-full h-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl xl:text-6xl font-extrabold text-[#001b5e] xl:text-shadow">
            Negil Babu
          </h1>
          <h2 className="flex sm:text-3xl text-4xl pt-4 text-gray-900 text-shadow">
            Software Engineer
          </h2>

          {/* <h2 className="flex sm:text-3xl text-4xl pt-4 text-black text-shadow">
            Software Engineer
          </h2> */}
          <p className="text-black-700 pt-4">
            <TypeAnimation
              sequence={[
                "Full Stack Developer with a passion for learning new technologies",
                2000,
                "",
                100,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </p>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125"
              onClick={handleLinkedInClick}
            />
            <FaGithub
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125"
              onClick={handleGitHubClick}
            />
            <FaFacebookF
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125"
              onClick={handleFacebookClick}
            />
            <FaInstagram
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125"
            />
            <FaTwitter
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125"
              onClick={handleTwitterClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
