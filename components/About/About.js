import { ABOUT_LIST, SKILLS_LIST } from "@/constants/about";
import React from "react";
import { Element } from "react-scroll";
import { SimpleProgressBar } from "../ProgressBar";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Element className={styles.layout} name="about">
      <div className={styles.mapImg}>
        <div className={styles.aboutLayout}>
          <div className={styles.about}>
            <div className={styles.title}>
              <h2>Skills and Responsibilities</h2>
            </div>
            <ul className={styles.lists}>
              {ABOUT_LIST.map((about) => (
                <li key={about.id}>
                  <img
                    className={styles.rod}
                    src={"/images/svg/rod.svg"}
                    alt="check"
                    draggable={false}
                  />
                  <h6>{about.about}</h6>
                </li>
              ))}
            </ul>
            <div className={styles.techs}>
            <div className={styles.title}>
              <h2>Technologies I’ve worked with:</h2>
            </div>
              <div className={styles.skills}>
                {SKILLS_LIST.map((skills) => (
                  <div key={skills.id}>
                    <h6>{skills.name}</h6>
                    <SimpleProgressBar rate={skills.rate} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
