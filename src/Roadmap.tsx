import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "./styles";
import { experiences } from "./assets/constant";
import { textVariant } from "./utils/motion";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #434fcf" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div> */}

      <ul className="list-disc ml-5 space-y-[20px] pb-[0px]">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Roadmap = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="roadmap" className={`${styles.sectionSubText} text-center`}>
          What Eric has done and will do so far!
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Roadmap</h2>
      </motion.div>

      <div className="mt-20 flex flex-col pb-[200px]">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Roadmap;
