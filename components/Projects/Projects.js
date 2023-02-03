import { PROJECTS_LIST, WORK_LIST } from "@/constants/about";
import React from "react";
import { Element } from "react-scroll";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <Element className={styles.layout} name="projects">
      <div className={styles.skills}>
        <div className={styles.skillLayout}>
          <h1>
            My <span className="text-[#FF8E5E]">skills</span>
          </h1>
          <div>
            
          </div>
        </div>
      </div>
      <div className={styles.projlayout}></div>
    </Element>
  );
};

export default Projects;
