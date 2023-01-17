import React from "react";
import styles from "../styles/campaign.module.scss";

const Button = ({ props, text }: any) => {
  return (
    <>
      <div className={styles.btnBlink}>
        <button className={styles.btn}>{props}</button>
      </div>
      <p className={styles.btnText}>{text}</p>
    </>
  );
};

export default Button;
