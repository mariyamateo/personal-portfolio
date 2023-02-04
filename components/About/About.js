import React from "react";
import { SKILLS_LIST, WORK_LIST } from "@/constants/about";
import { Element } from "react-scroll";
import { TechCards, WorkCards } from "../Cards";

const About = () => {
  return (
    <Element className="overflow-hidden mt-40" name="about">
      <div className="flex flex-col flex-wrap w-full p-4 mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1">
            <h1>
              <span className="text-[#FF8E5E]">About</span> Me
            </h1>
            <h6 className="pt-4 pr-8 text-justify">
              a front-end developer who previously worked in civil engineering.
              made the transition to web development to pursue passion and bring
              a unique perspective to the field. dedicated to creating visually
              stunning and user-friendly web projects, and always looking for
              new opportunities to grow and make an impact.
              <br />
              <br /> in free time, a furmom who enjoys spending time with her
              furbabies.
            </h6>
            <h3 className="pt-16">
              Here are a few technologies I’ve been working with recently:
            </h3>
            <div className="grid grid-cols-5 gap-5 ml-auto mt-8 mr-8">
              {SKILLS_LIST.map((skills) => (
                <TechCards skills={skills} />
              ))}
            </div>
          </div>
          <div className="mb-8 col-span-1">
            <img
              className="rounded-2xl hidden lg:block"
              src="/images/png/about-dark.png"
              alt="dark"
              draggable={false}
            />
          </div>
        </div>
        <div className="pt-40 pb-20">
          <h2 className="pb-10">💼 Professional Experience</h2>
          <div className="p-8 flex flex-col space-y-10">
            {WORK_LIST.map((work) => (
              <WorkCards work={work} />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
