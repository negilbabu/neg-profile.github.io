import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaFacebookF, FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa'
const Main = () => {

    const linkedinUrl = "https://www.linkedin.com/in/negil-babu/";
    const facebookUrl = "https://www.facebook.com/negil.babu/";
    const instagramUrl = "https://www.instagram.com/mr_intravelor/";
    const twitterUrl = "https://twitter.com/Negil_Babu";

    const handleLinkedInClick = () => {
      window.open(linkedinUrl, "_blank");
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
      <img
        className="w-full h-screen object-cover object-left"
        src="https://source.unsplash.com/bKjHgo_Lbpo"
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Negil Babu</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Full Stack Developer
          </h2>
          <p className="text-gray-700 pt-4">
            <TypeAnimation
              sequence={[
                "I am a Full Stack Developer with a passion for learning new technologies",
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
              className="cursor-pointer"
              onClick={handleLinkedInClick}
            />
            <FaFacebookF
              size={20}
              className="cursor-pointer"
              onClick={handleFacebookClick}
            />
            <FaInstagram
              size={20}
              className="cursor-pointer"
              onClick={handleInstagramClick}
            />
            <FaTwitter
              size={20}
              className="cursor-pointer"
              onClick={handleTwitterClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
// BMnhuwFYr7w // bKjHgo_Lbpo // Wyc7vHXfCDQ