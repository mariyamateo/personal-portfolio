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
            <br />I am <span className="text-[#7477FF]">C</span>larisse, <br />
            Web developer
          </h1>
          <h6>Frontend Developer, Proficient in ReactJS</h6>
          <Button label={"See Projects"} />
        </div>
        <div>
          <img src="/images/svg/hero.svg" alt="developer" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
