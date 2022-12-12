import React from "react";
import styles from "./campaign.module.scss";

const Button = ({ props }: any) => {
  return (
    <>
      <div className={styles.btnBlink}>
        <button className={styles.btn}>{props}</button>
      </div>
    </>
  );
};

export default Button;
