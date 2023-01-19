import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, disabled }) => {
  return (
    <button className={styles.layout} disabled={disabled}>
      <p className={styles.name}>{label}</p>
    </button>
  );
};

export default Button;
