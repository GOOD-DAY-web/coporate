// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./styles/campaign.module.scss";

export default function Benefits() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>キャンペーン3大特権 !!</h2>
        <div className={styles.image}>
          <Image
            className={styles.articleImage}
            src={"/campaign/mainImage_00.jpg"}
            alt={""}
            width={2000}
            height={2000}
            objectFit={"contain"}
          />
        </div>
        <div className={styles.list}>
          <div>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>01</h2>
                <p>スタートアップキャンペーン実施中!!</p>
              </li>
            </ul>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>02</h2>
                <p>スタートアップキャンペーン実施中!!</p>
              </li>
            </ul>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>03</h2>
                <p>スタートアップキャンペーン実施中!!</p>
              </li>
            </ul>
          </div>
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
