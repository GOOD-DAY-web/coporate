// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Notice from "./Layouts/Notice";
import styles from "./styles/campaign.module.scss";

export default function ChooseUs() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>選ばれる理由</h2>
        {/* <div className={styles.image}>
          <Image
            className={styles.articleImage}
            src={"/campaign/mainImage_00.jpg"}
            alt={""}
            width={2000}
            height={2000}
            objectFit={"contain"}
          />
        </div> */}
        <div className={styles.list}>
          <div>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>01</h2>
                <p>全て個室・半個室!!</p>
              </li>
            </ul>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>02</h2>
                <p>最初から最後まで一人のスタイリストが担当。</p>
              </li>
            </ul>
            <ul
              className={`${styles.listItem} ${styles.kiran} ${styles.background_02}`}
            >
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>03</h2>
                <p>Whithコロナ時代でも安心の清潔感</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>01</h2>
            <p className={styles.detailText}>全て個室・半個室!!</p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>安心</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  GOOD-DAYでは、セットブースは個室・半個室をご用意しています。人目を気にすることなく安心してお過ごしいただけます。
                </li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_00.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>倉敷中島店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_01.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>倉敷中島店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_02.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>倉敷中島店</li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_03.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>岡山野田店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_04.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>岡山野田店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_05.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>岡山野田店</li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>02</h2>
            <p className={styles.detailText}>
              最初から最後まで一人のスタイリストが担当。
            </p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>快適</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  GOOD-DAYでは、お出迎えからお見送りまで一人のスタイリストが担当します。途中で他の人に変わることが無いので、安心です。
                </li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_06.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>
                  スタイリストがシャンプーします。
                </li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_07.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>
                  人が変わってほしくないカラーもスタイリスが担当します。
                </li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_08.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>
                  ドライ&ブローもスタイリストだから安心です。
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>03</h2>
            <p className={styles.detailText}>清潔感ある店内</p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>清潔</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  GOOD-DAYでは入口にて手指の消毒や検温を実施しています。Whithコロナ時代でも安心してお過ごしいただけます。また、出来て間もない店舗なので店内が綺麗なことも特徴の一つです。
                </li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_09.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>倉敷中島店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_10.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>倉敷中島店</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>
                  <Image
                    alt={""}
                    height={1000}
                    objectFit={"contain"}
                    src={"/campaign/campaign_point_11.png"}
                    width={1000}
                  />
                </li>
                <li className={styles.detailItemText}>岡山野田店</li>
              </ul>
            </div>
          </div>
        </div>
        <Notice />
      </div>
    </>
  );
}
