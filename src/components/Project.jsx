import React from "react";
import ProjectItem from "./ProjectItem";
import Rfooter from "../assets/rfooter.png";
import Rlisting from "../assets/rlisting.png";
import Rhome from "../assets/rhome.png";
import Rlogin from "../assets/rlogin.png";

const Project = () => {
  return (
    <div id="project" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        {" "}
        Projects
      </h1>
      <p className="text-center py-8  text-justify">
        These sample images offer a glimpse into the diverse range of projects I
        have undertaken. Each project represents a unique challenge that I
        approached with creativity and skill. You can explore the complete
        collection of my work in detail by visiting my GitHub repository, where
        I have documented and shared the source code, design considerations, and
        outcomes of each project. From web development and software engineering
        to innovative solutions, my portfolio reflects my commitment to
        delivering quality and impactful solutions. Feel free to browse through
        the projects, and do not hesitate to reach out if you have any questions
        or collaboration opportunities.
      </p>
      <div className="grid md:grid-cols-2 gap-12 pt-4">
        <ProjectItem
          img={Rlogin}
          title="Rentx login"
          technology=" Angular + Spring boot"
        />
        <ProjectItem
          img={Rhome}
          title="Rentx home page"
          technology=" Angular + Spring boot"
        />
        <ProjectItem
          img={Rfooter}
          title="login page"
          technology=" Angular + Spring boot"
        />
        <ProjectItem
          img={Rlisting}
          title="Dashboard page"
          technology=" Angular + Spring boot"
        />
      </div>
    </div>
  );
};

export default Project;
