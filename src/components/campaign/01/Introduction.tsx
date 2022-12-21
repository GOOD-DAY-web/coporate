import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Layouts/Button";
import Notice from "./Layouts/Notice";
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
        <Notice />
      </div>
    </>
  );
}
