import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, disabled, hand }) => {
  return (
    <button className={styles.layout} disabled={disabled}>
      <p className={styles.name}>{label}</p>
      <img
        hand={hand}
        src="/images/svg/soso.png"
        alt="get-in-touch"
        className="h-7"
        draggable={false}
      />
    </button>
  );
};

export default Button;
