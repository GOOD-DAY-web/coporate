// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Notice from "./Layouts/Notice";
import styles from "./styles/campaign.module.scss";

export default function Benefits() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>キャンペーン3大特権 !!</h2>
        <div className={styles.list}>
          <div>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>01</h2>
                <p>今だけ!! 施術費用から20%OFF(最大¥3,000引き)</p>
              </li>
            </ul>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>02</h2>
                <p>紹介した人、された人どっちもお得!!!</p>
              </li>
            </ul>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>03</h2>
                <p>予約の取りづらいGOOD-DAYが利用できる!!</p>
              </li>
            </ul>
          </div>
        </div>
        <Notice />
      </div>
    </>
  );
}
