import { SKILLS_DESC } from "@/constants/about";
import React from "react";
import { Element } from "react-scroll";
import { SkillCards } from "../Cards";

const Projects = () => {
  return (
    <Element className="overflow-hidden w-screen" name="projects">
      <div className="bg-[#19191D] p-4">
        <div className="mx-auto py-16 max-w-7xl">
          <h1>
            My <span className="text-[#FF8E5E]">skills</span>
          </h1>
          <div className="grid grid-rows-3 gap-8 py-12 lg:grid-rows-none lg:grid-cols-3">
            {SKILLS_DESC.map((desc) => (
              <SkillCards desc={desc} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-16 pb-52 max-w-7xl"></div>
    </Element>
  );
};

export default Projects;
