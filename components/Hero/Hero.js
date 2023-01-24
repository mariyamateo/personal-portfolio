import React from "react";
import { Button } from "../Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.heroLayout}>
        <div className={styles.hero}>
          <h1 className="pt-4">
            Hello, I'm <br />
            <span className={styles.name}>Ma. Clarisse Mateo</span>
          </h1>
          <h2>Software Engineer</h2>
          <h5 className="pb-8">
            Based out Manila, PH. Specialized in building web and mobile
            applications.
          </h5>
          <a href="mailto:ma.clarissepmateo@gmail.com">
            <Button label={"Get in touch"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
