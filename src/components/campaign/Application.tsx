import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Button";
import styles from "./campaign.module.scss";

export default function Application() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.tite}>お客さまご紹介キャンペーン</h2>
        <div className={styles.main}>
          <div className={styles.flexE}>
            <div className={styles.leftArea}>
              <Image
                className={styles.articleImage}
                src={"/campaign/campaign_00.jpg"}
                alt={""}
                width={1200}
                height={830}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.rightArea}>
              <div className={styles.rightAreaInner}>
                <ul>
                  <li className={styles.innerText}>通常価格</li>
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
                  <li className={styles.innerText}>20%OFF</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.buttonArea}>
            <Link href={"/"} passHref>
              <Button props={"20%OFFで予約する"} />
            </Link>
          </div>
        </div>
        <div className={styles.noticeArea}>
          <div>
            <ul>
              <li>
                ※本キャンペーンはチラシをお持ちいただいた方限定のキャンペーンです。
              </li>
              <li>
                ※さらにご成約いただいた際に仲介手数料を20%OFFとさせていただきます。
              </li>
              <li>
                ※キャンペーンは予告なく変更、終了する場合がございます。予めご了承ください。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}