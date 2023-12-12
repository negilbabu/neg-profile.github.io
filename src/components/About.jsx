


import React from "react";

const About = () => {
  return (
    <div id="about" className="max-w-[1140px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        About Me
      </h1>

      <div className="container overflow-y-auto xl:overflow-y-visible mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center xl:text-start">
          <h2 className="h2">
            Tech Enthusiast with a Creative
            <span className="text-accent"> Spark.</span>
          </h2>
          <p className="text-justify sm:text-center xl:text-left max-w-lg mx-auto xl:mx-0 mb-6 xl:mb-12">
            Hey there, I am{" "}
            <span className="font-normal text-Blue/90">Negil Babu </span> A tech
            enthusiast with an unquenchable creative spark, armed with an MCA
            degree and a year of hands-on experience in full stack development.
            I'm also an avid traveler, a photography fanatic, and an unshakable
            believer in the boundless power of technology to shape our world.
          </p>

          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <span>1</span> +
                </div>
                <div className="text-sm tracking-[1px] leading-[1.4] max-w-[150px]">
                  Years of industrial experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <span>5</span> +
                </div>
                <div className="text-sm tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            <div className="text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-200 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0">
              skills
            </div>
            <div className="cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0">
              achievements
            </div>
            <div className="cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0">
              experience
            </div>
            <div className="cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0">
              credentials
            </div>
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 md:mb-0">Web Development</div>
              <div className="hidden md:flex">-</div>
              <div className="flex gap-x-4">
                <div className="text-2xl text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                  </svg>
                </div>
                {/* Add other icons here */}
              </div>
            </div>
            {/* Add other sections with icons and details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
