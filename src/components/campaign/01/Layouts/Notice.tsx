import React from "react";
import styles from "../styles/campaign.module.scss";

export default function Notice() {
  return (
    <div className={styles.noticeArea}>
      <div>
        <ul>
          <li className={styles.listItemText}>
            ※チラシお持ちでない場合、キャンペーン価格を適用することはできません。
          </li>
          <li className={styles.listItemText}>
            ※GOOD-DAYは複数店舗ございます。岡山野田店、倉敷中島店と複数店舗がございますので、ご予約の際には店舗にご注意ください。
          </li>
          <li className={styles.listItemText}>
            ※必ずご予約をお願いいたします。GOOD-DAYではお待たせしない接客を心がけています。ご予約のないご来店はお受けできない場合がございます。
          </li>
        </ul>
      </div>
    </div>
  );
}
