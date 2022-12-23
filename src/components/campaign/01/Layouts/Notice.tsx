import React from "react";
import styles from "../styles/campaign.module.scss";

export default function Notice() {
  return (
    <div className={styles.noticeArea}>
      <div>
        <ul>
          <li className={styles.listItemText}>
            ※その他クーポン・割引と併用することはできません。
          </li>
          <li className={styles.listItemText}>
            ※GOOD-DAYを初めてご利用いただくお客様に割引を提供しています。
          </li>
          <li className={styles.listItemText}>
            ※チラシお持ちでない場合、キャンペーン価格を適用することはできません。
          </li>
        </ul>
      </div>
    </div>
  );
}
