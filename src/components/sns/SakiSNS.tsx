import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function SakiSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link
          href={"https://beauty.hotpepper.jp/slnH000636670/stylist/T000875711/"}
          passHref
        >
          <div className={styles.blog}></div>
        </Link>
        {/* <Link href={"https://www.instagram.com/dai1_11/"} passHref>
          <div className={styles.instagram}></div>
        </Link> */}
        <Link
          href={"https://liff.line.me/1645278921-kWRPP32q/?accountId=879npjqu"}
          passHref
        >
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
