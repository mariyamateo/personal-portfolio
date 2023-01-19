import React from "react";
import { Element } from "react-scroll";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Element className={styles.layout} name="about">
      <div className={styles.aboutLayout}>
        <div className={styles.about}>
          <div className={styles.title}>
            <h2>About Me</h2>
          </div>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius
            nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra
            tempus eleifend. Sed posuere augue non nulla consectetur hendrerit.
            In molestie urna in viverra pulvinar. Aenean facilisis id massa
            pretium lobortis
          </h6>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius
            nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra
            tempus eleifend. Sed posuere augue non nulla consectetur hendrerit.
            In molestie urna in viverra pulvinar. Aenean facilisis id massa
            pretium lobortis
          </h6>
          <h3>Technologies I’ve worked with:</h3>
          <h6></h6>
        </div>
      </div>
    </Element>
  );
};

export default About;
