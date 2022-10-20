import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function TomoyaSNS() {
  return (
    <>
      <div className={styles.sns}>
        {/* <Link href={"/"} passHref>
          <a>
            <div className={styles.blog}></div>
          </a>
        </Link> */}
        <Link href={"https://z-p15.www.instagram.com/moyashiosushi/"} passHref>
          <a>
            <div className={styles.instagram}></div>
          </a>
        </Link>
        <Link href={"https://line.me/R/ti/p/%40xkn5155f"} passHref>
          <a>
            <div className={styles.line}></div>
          </a>
        </Link>
      </div>
    </>
  );
}
