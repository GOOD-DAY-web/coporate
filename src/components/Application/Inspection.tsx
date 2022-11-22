// サロン見学について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Inspection() {
  const ApplicationItems = {
    src: "/media/howToUse_00.png",
    alt: "",
    title: "STEP1 サロン見学",
    text: "GOOD-DAYではサロン見学からスタートします。所要時間は1〜2時間程度を予定しています。サロン見学後、ご入会の手続きを進めさせていただきます。",
    subTitle_00: "施設見学",
    subText_00:
      "ご希望の店舗にて、店内を実際に見学していただきます。お客様にご迷惑にならない範囲で可能な設備をご確認ください。",
    subTitle_01: "カジュアル面談",
    subText_01:
      "お時間がございましたら働いているスタイリスト、運営サイドと簡単な質疑応答のお時間を設定させていただきます。不明点などございましたら、お気軽にご質問ください。",
  };
  return (
    <>
      <div className={styles.applicationArea}>
        <div className={styles.applicationTopArea}>
          <div className={styles.applicationTopImg}>
            <Image
              className=""
              src={ApplicationItems.src}
              alt=""
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>
          <h2 className={styles.applicationTopTitle}>
            {ApplicationItems.title}
          </h2>
          <p className={styles.applicationTopText}>{ApplicationItems.text}</p>
        </div>
        <div className={styles.applicationUnderArea}>
          <div className={styles.applicationUnderLeft}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_00}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_00}
            </p>
          </div>
          <div className={styles.applicationUnderRight}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_01}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_01}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
