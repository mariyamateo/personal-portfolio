import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, disabled, hand }) => {
  return (
    <button className={styles.layout} disabled={disabled}>
      <h6 className={styles.name}>{label}</h6>
    </button>
  );
};

export default Button;
