// 特権・特典について
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./campaign.module.scss";

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
              <li className={styles.listItem_03}>全て個室・半個室!!</li>
              <li className={styles.listItem_04}>
                最初から最後まで一人のスタイリストが担当。
              </li>
              <li className={styles.listItem_05}>
                腕の良いフリーランススタイリストのみ在籍!!
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <h2>01</h2>
            <p>テキスト</p>
            <div>
              flex align-items: center;
              <ul>
                <li>保湿</li>
                <li>｜</li>
                <li>テキスト</li>
              </ul>
            </div>
            <div>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2>01</h2>
            <p></p>
            <div>
              flex align-items: center;
              <ul>
                <li>保湿</li>
                <li>｜</li>
                <li>テキスト</li>
              </ul>
            </div>
            <div>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className={styles.detail}>
            <h2>01</h2>
            <p></p>
            <div>
              flex align-items: center;
              <ul>
                <li>保湿</li>
                <li>｜</li>
                <li>テキスト</li>
              </ul>
            </div>
            <div>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul>
                アイコンを並べたかのようなエリア
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.noticeArea}>
          <div>
            <ul>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
              <li>※何か特筆して明示すべき事柄があれば記入</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
