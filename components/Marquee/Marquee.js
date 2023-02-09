import React from "react";
import { SKILLS } from "@/constants/marquee-skills";
import Marquee from "react-fast-marquee";

const MarqueeSkills = () => {
  return (
    <div className="-rotate-2 bg-white">
      <Marquee gradient={false} speed={100}>
        <div className="flex flex-row items-center py-5">
          {SKILLS.map((skill, index) => (
            <div className="flex flex-row items-center" key={skill.id}>
              <h6 className="px-4 text-black">{skill.name}</h6>
              <h6 className="text-[#FF8E5E]">*</h6>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center py-5">
          {SKILLS.map((skill, index) => (
            <div className="flex flex-row items-center" key={skill.id}>
              <h6 className="px-4 text-black">{skill.name}</h6>
              <h6 className="text-[#FF8E5E]">*</h6>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSkills;
