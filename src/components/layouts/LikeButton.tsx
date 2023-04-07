import React, { useState } from "react";
import styles from "../../styles/Layouts/LikeButton.module.scss";

export const LikeButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <span className={styles.likeButton} onClick={handleClick}>
          🤍 {count}
        </span>
      </div>
    </>
  );
};
