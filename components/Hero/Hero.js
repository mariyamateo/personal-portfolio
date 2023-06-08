import React, { useEffect, useState } from "react";
import { Button } from "../Cards";
import styles from "./Hero.module.scss";
import cx from "classnames";

const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const texts = [
      "UI/UX Developer.         ",
      "UI/UX Designer.         ",
      "Web Designer.         ",
      "Web3 Enthusiast.         ",
      "Career Shifter.         ",
      "Civil Engineer.         ",
      "Master Plumber.         ",
      "Traveller.         ",
      "Cat Mom.         ",
      "Kpop Fan. I stan BTS!         ",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      setText(letter);
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 100);
    })();
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.heroLayout}>
        <div className={styles.hero}>
          <h1>
            ✋ <span className={styles.first}>Hello, I'm </span>Clarisse
            <span className={styles.first}>.</span>
          </h1>
          <div className={styles.workList}>
            <h2>
              I'm a <span className={styles.work}>Frontend Web Developer</span>{" "}
              &&
            </h2>
            <h2>
              <span className="md:ml-2">{text}</span>
            </h2>
          </div>
          <h5 className="pb-8">
            Based out Camarines Sur, Bicol, PH. Specialized in building web and mobile
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
