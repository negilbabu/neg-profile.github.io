import React from "react";
// import WorkItem from "./workItem";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Associate Software Engineer",
    duration: "1year",
    details:
      "Innovature software labs. \n Developed and maintained software applications using cutting-edge technologies to meet client requirements.\n Collaborated with a dynamic team to analyze and implement innovative solutions for diverse projects.\n Contributed to the entire software development lifecycle, from design and coding to testing and deployment.\n  to enhance software quality. \n Adapted quickly to evolving project needs and deadlines, ensuring timely and efficient delivery. \n Implemented RESTful APIs for seamless integration with external systems, resulting in improved data exchange efficiency. \n Actively participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives, to ensure successful project delivery.",
  },
  {
    year: 2023,
    title: "Software Engineer",
    duration: "3 Months",
    details:
      "Innovature software labs 1111111111111111111111111111111111111111\n11111111111111111\n111111111111111111\n11111111111111111111111111111111111111\n11111111111111111111111111111111111111111111111111111111111111\n111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111\n111111111111111111111111111111111111\n11111111111111111111111111111111111\n111111111111111111111111111111111111111111111111111111\n111111111111111111111111111111111111\n111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};


export default Work;
