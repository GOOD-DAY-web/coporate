import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function EriSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link
          href={"https://beauty.hotpepper.jp/slnH000636670/stylist/T000876495/"}
          passHref
        >
          <div className={styles.blog}></div>
        </Link>
        <Link
          href={"https://instagram.com/misaki____00?igshid=OGQ5ZDc2ODk2ZA=="}
          passHref
        >
          <div className={styles.instagram}></div>
        </Link>
        <Link
          href={"https://liff.line.me/1645278921-kWRPP32q/?accountId=373vzavx"}
          passHref
        >
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
