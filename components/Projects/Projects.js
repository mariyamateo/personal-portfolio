import { PROJECTS_LIST, WORK_LIST } from "@/constants/about";
import React from "react";
import { Element } from "react-scroll";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <Element className={styles.layout} name="projects">
      <div className={styles.projlayout}>
        <div className={styles.title}>
          <h2>Work</h2>
        </div>
        <div className={styles.box}>
          {WORK_LIST.map((work) => (
            <div key={work.id} className={styles.work}>
              <h6>{work.date}</h6>
              <h2 className="text-[#7477FF]">{work.role}</h2>
              <h5>{work.company}</h5>
              <h6>{work.work}</h6>
            </div>
          ))}
        </div>
        <div className={styles.title}>
          <h2>Projects</h2>
        </div>
        <div className={styles.box}>
          {PROJECTS_LIST.map((work) => (
            <div
              key={work.id}
              className={styles.project}
              onClick={() => window.open(work.website, "_blank")}
            >
              <img
                src={work.image}
                alt={work.project}
                draggable={false}
                className="pl-4 pt-12 pb-4"
              />
              <h2 className="text-[#7477FF]">{work.project}</h2>
              <h5 className="italic">{work.role}</h5>
              <h6>{work.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;