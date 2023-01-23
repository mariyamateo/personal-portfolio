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
            <span className="text-[#7477FF] font-[PacificoRegular]">M</span>
            <span className="font-[PacificoRegular]">a.</span>{" "}
            <span className="text-[#7477FF] font-[PacificoRegular]">C</span>
            <span className="font-[PacificoRegular]">larisse</span>{" "}
            <span className="text-[#7477FF] font-[PacificoRegular]">M</span>
            <span className="font-[PacificoRegular]">ateo</span>, <br />
          </h1>
          <h2>Software Engineer</h2>
          <h3 className="pb-8">Frontend Developer, Proficient in ReactJS</h3>
          <a href="mailto:ma.clarissepmateo@gmail.com">
            <Button label={"Get in touch"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
