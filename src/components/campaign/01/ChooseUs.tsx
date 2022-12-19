// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./styles/campaign.module.scss";

export default function ChooseUs() {
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>選ばれる理由</h2>
        <div className={styles.image}>
          <Image
            className={styles.articleImage}
            src={"/campaign/mainImage_00.jpg"}
            alt={""}
            width={2000}
            height={2000}
            objectFit={"contain"}
          />
        </div>
        <div className={styles.list}>
          <div>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>01</h2>
                <p>全て個室・半個室!!</p>
              </li>
            </ul>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>02</h2>
                <p>最初から最後まで一人のスタイリストが担当。</p>
              </li>
            </ul>
            <ul className={styles.listItem}>
              <li className={`${styles.flexR} ${styles.itemC}`}>
                <h2 className={styles.listItemlTitle}>03</h2>
                <p>腕の良いフリーランススタイリストが在籍!!</p>
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
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
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
                  GOOD-DAYでは、お出迎えからお見送りまで一人のスタイリストが担当します。途中で他の人に変わることが無いので、お客様が気を遣われる必要はございません。
                </li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
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
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
            <div className={styles.detailItems}>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.noticeArea}>
          <div>
            <ul>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
              <li className={styles.listItemText}>
                ※何か特筆して明示すべき事柄があれば記入
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
