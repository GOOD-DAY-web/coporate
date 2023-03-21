// ご入金について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Deposit() {
  const ApplicationItems = {
    src: "/media/howToUse_03.png",
    alt: "",
    title: "STEP3 ご入金",
    text: "ご契約時に入会金(初回のみ)、施設利用料をお支払いください。",
    subTitle_00: "入会金",
    subText_00:
      "初回のみ入会金をいただいております。店舗によって金額が異なります。",
    subTitle_01: "施設利用料",
    subText_01: "毎月発生する料金です。店舗によって金額が異なります。",
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
