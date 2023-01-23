import React from "react";
import styles from "./Contact.module.scss";
import cx from "classnames";

const Contact = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.contactLayout}>
        <h1>
          Seeking opportunities <br /> to connect?
        </h1>
        <div className={styles.buttons}>
          <a href="mailto:ma.clarissepmateo@gmail.com">
            <button className={styles.button}>
              <img
                src="/images/svg/mail.gif"
                alt="mail"
                draggable={false}
                className="h-8"
              />
              <h6>Email</h6>
            </button>
          </a>
          <button
            className={styles.button}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/maclarisse-mateo/",
                "_blank"
              )
            }
          >
            <img
              src="/images/svg/linkedin.gif"
              alt="linkedin"
              draggable={false}
            />
            <h6>LinkedIn</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
