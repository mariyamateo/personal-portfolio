import { ABOUT_LIST } from "@/constants/about";
import React from "react";
import { Element } from "react-scroll";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Element className={styles.layout} name="about">
      <div className={styles.mapImg}>
        <div className={styles.aboutLayout}>
          <div className={styles.about}>
            <div className={styles.title}>
              <h2>About Me</h2>
            </div>
            <ul className={styles.lists}>
              {ABOUT_LIST.map((about, index) => (
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
              <h3>Technologies I’ve worked with:</h3>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
