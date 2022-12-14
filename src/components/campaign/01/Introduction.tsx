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
        <h2 className={styles.title}>GOOD-DAYお客様ご紹介キャンペーン</h2>
        <Image
          className={styles.articleImage}
          src={"/campaign/mainImage_00.jpg"}
          alt={""}
          width={2000}
          height={2000}
          objectFit={"contain"}
        />
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
