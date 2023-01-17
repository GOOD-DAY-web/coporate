// 必要書類の記入&提出について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Documents() {
  const ApplicationItems = {
    src: "/media/howToUse_01.png",
    alt: "",
    title: "STEP2 書類の記入&提出",
    text: "入会に必要な記入書類、提出書類のご準備をお願いします。必要書類については、サロン見学時にお渡しします。",
    subTitle_00: "申込書",
    subText_00:
      "サロン見学の際にお渡しします。サロン見学後、GOOD-DAYに入会したい場合には提出をお願いします。",
    subTitle_01: "美容師免許",
    subText_01:
      "GOOD-DAYでは美容師免許の確認ができない場合、入会することはできません。コピーを1部提出してください。",
    subTitle_02: "身分証明書(免許など)",
    subText_02:
      "運転免許証、保険証など、個人が確認できる身分証明書のコピーを1部提出してください。",
    subTitle_03: "入会契約書",
    subText_03: "GOOD-DAY指定の入会契約書にご記入をお願いします。",
    subTitle_04: "利用規約",
    subText_04: "GOOD-DAY指定の利用規約書にご記入をお願いいたします。",
    subTitle_05: "見積書",
    subText_05:
      "店舗によって金額が異なります。入会に必要な金額を記入したお見積書をお渡しいたします。",
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

        <div className={styles.applicationUnderArea}>
          <div className={styles.applicationUnderLeft}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_02}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_02}
            </p>
          </div>
          <div className={styles.applicationUnderRight}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_03}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_03}
            </p>
          </div>
        </div>

        <div className={styles.applicationUnderArea}>
          <div className={styles.applicationUnderLeft}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_04}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_04}
            </p>
          </div>
          <div className={styles.applicationUnderRight}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_05}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_05}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
