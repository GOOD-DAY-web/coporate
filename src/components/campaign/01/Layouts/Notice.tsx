import React from "react";
import styles from "../styles/campaign.module.scss";

export default function Notice() {
  return (
    <div className={styles.noticeArea}>
      <div>
        <ul>
          <li className={styles.listItemText}>
            ※チラシ、チケットの使用期限は2023年1月1日〜12月31日の間です。
          </li>
          <li className={styles.listItemText}>
            ※お客様ご紹介キャンペーンは、その他クーポン・割引と併用することはできません。
          </li>
          <li className={styles.listItemText}>
            ※必ずチラシをご持参ください。チラシがない場合、キャンペーン価格を適用することはできません。
          </li>
        </ul>
      </div>
    </div>
  );
}
