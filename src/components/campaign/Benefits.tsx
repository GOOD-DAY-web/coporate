// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./campaign.module.scss";

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
              <li className={styles.listItem_00}>
                スタートアップキャンペーン実施中!!
              </li>
              <li className={styles.listItem_01}>
                早い者勝ち!!先着5名様限定!!半年間、40%OFF!!キャンペーン実施中
              </li>
              <li className={styles.listItem_02}>
                スタートアップセットプレゼント中!!
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.noticeArea}>
          <div>
            <ul>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
