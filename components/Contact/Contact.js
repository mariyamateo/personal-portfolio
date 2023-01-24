import React from "react";
import styles from "./Contact.module.scss";
import DisClaimer from "./DisClaimer";

const Contact = ({ onClick }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.contactLayout}>
          {/* <h1>Get in touch</h1> */}
          <h2 className="w-2/3">
            Are you a business seeking for a web presence or an employer looking
            to hire? You can get in touch with me here.
          </h2>
          <div className={styles.buttons}>
            <a href="mailto:ma.clarissepmateo@gmail.com">
              <button className={styles.button}>
                <img
                  src="/images/svg/mail.gif"
                  alt="mail"
                  draggable={false}
                  className="h-8"
                />
                <h3>Shoot me an email</h3>
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
              <h3>Connect via LinkedIn</h3>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Copyright © 2023 Ma. Clarisse Mateo •{" "}
          <span className={styles.disclaimerButton} onClick={onClick}>
            Disclaimer
          </span>
        </p>
      </div>
    </>
  );
};

export default Contact;
