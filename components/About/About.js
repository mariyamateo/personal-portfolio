import React from "react";
import styles from "./About.module.scss";
import { SKILLS_LIST, WORK_LIST } from "@/constants/about";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element className={styles.layout} name="about">
      <div className={styles.aboutLayout}>
        <div className={styles.aboutME}>
          <div className={styles.caption}>
            <h1>
              <span className="text-[#FF8E5E]">About</span> Me
            </h1>
            <p className="pt-4 pr-8">
              a front-end developer who previously worked in civil engineering.
              made the transition to web development to pursue passion and bring
              a unique perspective to the field. dedicated to creating visually
              stunning and user-friendly web projects, and always looking for
              new opportunities to grow and make an impact.
              <br />
              <br /> in free time, a furmom who enjoys spending time with her
              furbabies.
            </p>
            <h3 className="pt-16">
              Here are a few technologies I’ve been working with recently:
            </h3>
            <div className={styles.skills}>
              {SKILLS_LIST.map((skills) => (
                <div key={skills.id} className={styles.box}>
                  <img
                    className={styles.image}
                    src={skills.image}
                    alt={skills.name}
                    draggable={false}
                  />
                  <h6 className="text-slate-500 text-sm text-center">
                    {skills.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.image}>
            <img
              className="rounded-2xl hidden lg:block"
              src="/images/png/about-dark.png"
              alt="dark"
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.experience}>
          <h2 className="pb-10">💼 Professional Experience</h2>
          <div className="p-8 flex flex-col space-y-10">
            {WORK_LIST.map((work, index) => (
              <div>
                <div className="flex flex-row items-center space-x-4">
                  <h4>{work.company}</h4>
                  <h6>({work.date})</h6>
                </div>
                <h6 className="pt-4">{work.role}</h6>
                <div className="flex flex-col space-y-1 pt-3">
                  <h6>• {work.work1}</h6>
                  <h6>• {work.work2}</h6>
                  <h6>• {work.work3}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
