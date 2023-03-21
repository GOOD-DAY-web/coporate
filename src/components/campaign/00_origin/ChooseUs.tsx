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
                <p>腕の良いフリーランススタイリストのみ在籍!!</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>01</h2>
            <p className={styles.detailText}>選ばれる理由1</p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>ポイント</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。
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
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>02</h2>
            <p className={styles.detailText}>選ばれる理由2</p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>ポイント</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。
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
              <ul className={styles.detailItem}>
                <li className={styles.detailImg}>&nbsp;</li>
                <li className={styles.detailItemText}>テキスト</li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2 className={styles.detailTitle}>03</h2>
            <p className={styles.detailText}>選ばれる理由3</p>
            <div>
              <ul className={`${styles.flexE} ${styles.detailLine}`}>
                <li className={styles.detailLine_00}>ポイント</li>
                <li className={styles.detailLine_01}>&nbsp;</li>
                <li className={styles.detailLine_02}>
                  テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。テキストです。ここにテキストが入ります。
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
