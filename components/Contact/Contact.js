import React from "react";
import styles from "./Contact.module.scss";
import cx from "classnames";

const Contact = () => {
  return (
    <>
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
                <h3>Email</h3>
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
              <h3>LinkedIn</h3>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Copyright © 2023 Ma. Clarisse Mateo • <span className={styles.disclaimerButton}>Disclaimer</span>
        </p>
      </div>
    </>
  );
};

export default Contact;
