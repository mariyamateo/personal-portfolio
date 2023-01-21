import React from "react";
import { Button } from "../Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.heroLayout}>
        <div className={styles.hero}>
          <h1 className="pt-4">
            Hi,
            <br />I am{" "}
            <span className="text-[#7477FF] font-[PacificoRegular]">C</span>
            <span className="font-[PacificoRegular]">larisse</span>, <br />
            Software Engineer
          </h1>
          <h3 className="pb-8">Frontend Developer, Proficient in ReactJS</h3>
          <Button label={"Get in touch"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
