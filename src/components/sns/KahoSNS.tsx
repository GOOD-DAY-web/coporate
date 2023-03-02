import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function KahoSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000616748/blog/"} passHref>
          <div className={styles.blog}></div>
        </Link>
        <Link href={"https://www.instagram.com/kah0_____/"} passHref>
          <div className={styles.instagram}></div>
        </Link>
        <Link
          href={"https://liff.line.me/1645278921-kWRPP32q/?accountId=771dtkjh"}
          passHref
        >
          <div className={styles.line}></div>
        </Link>
        {/* <Link href={"https://minimodel.jp/r/KmDJoKw?list_no=1"} passHref>
          <div className={styles.minimo}></div>
        </Link> */}
      </div>
    </>
  );
}
