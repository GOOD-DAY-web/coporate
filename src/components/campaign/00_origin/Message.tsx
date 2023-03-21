import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Layouts/Button";
import styles from "./styles/campaign.module.scss";

export default function Message() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>メッセージのタイトル</h2>
        <div className={styles.main}>
          <div className={`${styles.block} ${styles.flexE}`}>
            <div className={styles.leftArea}>
              <Image
                className={styles.articleImage}
                src={"/campaign/sample_00.png"}
                alt={""}
                width={1200}
                height={830}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.rightArea}>
              <div className={styles.rightAreaInner}>
                <ul>
                  <li className={styles.title}>スタイリスト名</li>
                  <li className={styles.text}>
                    スタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* もっと見るが必要になったら
          <div className={styles.buttonArea}>
            <Link href={"/"} passHref>
              <Button props={"20%OFFで予約する"} />
            </Link>
          </div> */}
        </div>
        <div className={styles.main}>
          <div className={`${styles.block} ${styles.flexE}`}>
            <div className={styles.leftArea}>
              <Image
                className={styles.articleImage}
                src={"/campaign/sample_00.png"}
                alt={""}
                width={1200}
                height={830}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.rightArea}>
              <div className={styles.rightAreaInner}>
                <ul>
                  <li className={styles.title}>スタイリスト名</li>
                  <li className={styles.text}>
                    スタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* もっと見るが必要になったら
          <div className={styles.buttonArea}>
            <Link href={"/"} passHref>
              <Button props={"20%OFFで予約する"} />
            </Link>
          </div> */}
        </div>
        <div className={styles.main}>
          <div className={`${styles.block} ${styles.flexE}`}>
            <div className={styles.leftArea}>
              <Image
                className={styles.articleImage}
                src={"/campaign/sample_00.png"}
                alt={""}
                width={1200}
                height={830}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.rightArea}>
              <div className={styles.rightAreaInner}>
                <ul>
                  <li className={styles.title}>スタイリスト名</li>
                  <li className={styles.text}>
                    スタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージスタイリストのメッセージ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* もっと見るが必要になったら
          <div className={styles.buttonArea}>
            <Link href={"/"} passHref>
              <Button props={"20%OFFで予約する"} />
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
