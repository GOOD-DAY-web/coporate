import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Layouts/Button";
import Notice from "./Layouts/Notice";
import styles from "./styles/campaign.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Application() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>
          GOOD-DAYに行くなら今がチャンス!!
          <br />
          2023年一番お得なキャンペーン開催中!!
        </h2>
        <div className={`${styles.main} ${styles.background_00}`}>
          <div className={styles.flexE}>
            <div className={styles.leftArea}>
              <Image
                className={styles.articleImage}
                src={"/campaign/mainImage_08.png"}
                alt={""}
                width={1200}
                height={830}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.rightArea}>
              <div className={styles.rightAreaInner}>
                <ul>
                  <li className={styles.innerText_00}>通常価格</li>
                  <li className={styles.arrow}>
                    <Image
                      className={styles.articleImage}
                      src={"/campaign/arrow_00.png"}
                      alt={""}
                      width={1000}
                      height={340}
                      objectFit={"contain"}
                    />
                  </li>
                  <li className={styles.innerText_01}>20%OFF</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.buttonArea}>
            <AnchorLink href={"#stylists"}>
              <Button props={"20%OFFで予約する"} text={"\\ 予約に進む /"} />
            </AnchorLink>
          </div>
        </div>
        <Notice />
      </div>
    </>
  );
}
