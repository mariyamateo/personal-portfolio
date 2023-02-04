import { SKILLS_DESC } from "@/constants/about";
import { PROJECTS_LIST } from "@/constants/projects";
import React from "react";
import { Element } from "react-scroll";
import { DeliverablesCard, SkillCards } from "../Cards";

const Projects = () => {
  return (
    <Element className="overflow-hidden w-screen pb-40" name="projects">
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
      <div className="mx-auto text-center pt-24 px-4 max-w-7xl">
        <h1>
          My <span className="text-[#FF8E5E]">deliverables</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 pt-12">
          {PROJECTS_LIST.map((proj) => (
              <DeliverablesCard proj={proj} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
