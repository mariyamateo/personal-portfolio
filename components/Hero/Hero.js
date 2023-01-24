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
            <section className={styles.animatedname}>
              <div className={styles.name}>Ma. Clarisse Mateo</div>
              <div className={styles.work}>Frontend Developer</div>
              <div className={styles.work2}>Ma. Clarisse Mateo</div>
            </section>
          </h1>
          <h2 className="lg:hidden">Software Engineer</h2>
          <h5 className="pb-8">
            Based out Manila, PH. Specialized in building web and mobile
            applications.
          </h5>
          <a href="mailto:ma.clarissepmateo@gmail.com">
            <Button label={"Get in touch"} />
          </a>
        </div>
      </div>
      <div
        className={styles.git}
        onClick={() =>
        window.open("https://github.com/mariyamateo", "_blank")
        }
      >
        <img src="/images/svg/github.svg" alt="github" draggable={false} />
        <p>GitHub</p>
      </div>
    </div>
  );
};

export default Hero;
