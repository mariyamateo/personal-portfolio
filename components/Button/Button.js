import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, disabled, hand }) => {
  return (
    <button className={styles.layout} disabled={disabled}>
      <p className={styles.name}>{label}</p>
      <img
        hand={hand}
        src="/images/svg/hand.svg"
        alt="get-in-touch"
        draggable={false}
      />
    </button>
  );
};

export default Button;
