// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";
import RS1 from "../assets/RS1.png";
import RS2 from "../assets/RS2.png";
import RS3 from "../assets/RS3.png";
import RS4 from "../assets/RS4.png";
import R1 from "../assets/R1.png";
import R2 from "../assets/R2.png";
import R3 from "../assets/R3.png";
import R4 from "../assets/R4.png";
import RA1 from "../assets/RA1.png";
import RA2 from "../assets/RA2.png";
import RA3 from "../assets/RA3.png";
import RA4 from "../assets/RA4.png";
import Q1 from "../assets/Q1.png";
import Q2 from "../assets/Q2.png";
import Q3 from "../assets/Q3.png";
import Q4 from "../assets/Q4.png";


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
          imgList={[RS1, RS2, RS3, RS4]}
          title="E-Commerce site"
          technology=" Angular + Spring boot"
          time={450}
        />
        <ProjectItem
          imgList={[R1, R2, R3, R4]}
          title="User Pages"
          technology=" Angular + Spring boot"
          time={600}
        />
        <ProjectItem
          imgList={[RA1, RA2, RA3, RA4]}
          title="Admin Pages"
          technology=" Angular + Spring boot"
          time={750}
        />
        <ProjectItem
          imgList={[Q1, Q2, Q3, Q4]}
          title="Report generation tool"
          technology=" React Vite + Python Django"
          time={900}
        />
      </div>
    </div>
  );
};

export default Project;
