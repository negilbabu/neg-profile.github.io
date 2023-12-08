import React from "react";
import ProjectItem from "./ProjectItem";
import Rfooter from "../assets/rfooter.png";
import Rlisting from "../assets/rlisting.png";
import Rhome from "../assets/rhome.png";
import Rlogin from "../assets/rlogin.png";

const Project = () =>{
    return (
      <div id="project" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          {" "}
          Projects
        </h1>
        <p className="text-center py-8">
          This is the sample porject info that i have done in the work period,
          and dut to confidential informations about the project i m not able to
          disclose any further details of the project bere. I have done projects
          in angular and spring boot and the second project is done in django
          and react.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <ProjectItem img={Rlogin} title="Rentx login" />
          <ProjectItem img={Rhome} title="Rentx home page" />
          <ProjectItem img={Rfooter} title="login page" />
          <ProjectItem img={Rlisting} title="Dashboard page" />
        </div>
      </div>
    );
}

export default Project;