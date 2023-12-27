import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Software Engineer - Innovature Labs",
    duration: "16 months",
    details:
      "Elevating my role as a Software Engineer, I led key initiatives at Innovature Labs in 2023. Over a brief short span, I adeptly navigated dynamic project landscapes, ensuring timely delivery and impeccable software quality. Spearheading the implementation of RESTful APIs, I optimized data exchange with external systems, showcasing a commitment to efficiency. Actively participating in agile ceremonies, I maintained an agile mindset for seamless project execution. My responsibilities spanned the entire software development lifecycle, emphasizing a holistic approach from analysis to deployment. This tenure exemplifies my adaptability, proficiency, and unwavering dedication to crafting high-quality, innovative solutions.",
  },
  {
    year: 2022,
    title: "Software Engineer Intern - Soften Technologies",
    duration: "6 months",
    details:
      "As a Software Engineer Intern at Soften Technologies, I actively contributed to project success by collaborating with stakeholders, resulting in a 15% improvement in accurate project deliverability timeframe estimation. I played a key role in maintaining and adapting existing web applications, demonstrating proficiency in handling technical issues. Additionally, I shadowed team members, achieving a 10% faster onboarding for new tasks through enhanced problem-solving skills.My responsibilities spanned the entire software development lifecycle, emphasizing a holistic approach from analysis to deployment. This tenure exemplifies my adaptability, proficiency, and unwavering dedication to crafting high-quality, innovative solutions.",
  },
];

const convertDurationToYearsAndMonths = (duration) => {
  const [months, year] = duration.split(" ");
  const totalMonths =
    parseInt(months) + (year.toLowerCase() === "year" ? 12 : 0);
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  return { years, months: remainingMonths };
};

const Work = () => {
  return (
    <div id="work" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => {
        const { years, months } = convertDurationToYearsAndMonths(
          item.duration
        );
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={`${
              years > 0 ? years + " year" + (years > 1 ? "s" : "") : ""
            } ${months > 0 ? months + " month" + (months > 1 ? "s" : "") : ""}`}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Work;
