import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function TomoyaSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000616748/blog/"} passHref>
          <div className={styles.blog}></div>
        </Link>
        <Link href={"https://z-p15.www.instagram.com/moyashiosushi/"} passHref>
          <div className={styles.instagram}></div>
        </Link>
        <Link href={"https://line.me/R/ti/p/%40xkn5155f"} passHref>
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
