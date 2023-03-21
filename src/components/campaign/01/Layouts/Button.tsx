import React from "react";
import styles from "../styles/campaign.module.scss";

const Button = ({ props, text }: any) => {
  return (
    <>
      <p className={styles.btnText}>{text}</p>
      <div className={styles.btnBlink}>
        <button className={styles.btn}>{props}</button>
      </div>
    </>
  );
};

export default Button;
