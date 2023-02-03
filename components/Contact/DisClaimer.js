import React from "react";
import styles from "./Contact.module.scss";

const DisClaimer = ({ show, close }) => {
  return (
    <>
      {show && (
        <div className={styles.disclaimer}>
          <h6 className={styles.close} onClick={close}>
            CLOSE
          </h6>
          <div className={styles.content}>
            <h5>CONTENT DISCLAIMER</h5>
            <div className={styles.caption}>
              Developer represents and warrants that developer has the
              knowledge, skill and experience necessary to produce the works.
              Projects are intellectual property of each client or employer.
              This site was created to showcase the skills, trade, profession
              and expertise of the developer.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisClaimer;
