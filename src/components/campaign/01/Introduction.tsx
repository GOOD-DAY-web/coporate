import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Layouts/Button";
import styles from "./styles/campaign.module.scss";
import { FramerMotion } from "../../layouts/FramerMotion";

export default function Introduction() {
  return (
    <>
      <div className={styles.adjustment}>&nbsp;</div>
      <div className={styles.area}>
        <h2 id={"introduction"} className={styles.mainTitle}>
          お客様ご紹介キャンペーン
        </h2>
        <div className={`${styles.zoom} ${styles.zoom1}`}>
          <Image
            className={`${styles.carousel} ${styles.zoomImage0}`}
            src={"/campaign/mainTitle_01.jpg"}
            alt={""}
            width={2000}
            height={2000}
            objectFit={"contain"}
          />
        </div>
        <div className={styles.noticeArea}>
          <div>
            <ul>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
