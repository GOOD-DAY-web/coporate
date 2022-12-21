import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./styles/campaign.module.scss";

export default function FAQ() {
  const Questions = {
    title: "よくある質問(FAQ)",
    alt_00: "",
    src_00: "/campaign/Question_00.png",
    num_00: "Q1.",
    question_00: "初めてなのに予約が必要なんですか？",
    answer_00:
      "GOOD-DAYではお客様をお待たせしないよう、完全予約&指名性とさせていただいています。初めての場合でもスタイリストをご指名ください。",

    alt_01: "",
    src_01: "/campaign/Question_00.png",
    num_01: "Q2.",
    question_01: "キャンペーンの期間はいつまでですか？",
    answer_01: "2023年1月1日〜12月31日の1年間有効です。",

    alt_02: "",
    src_02: "/campaign/Question_00.png",
    num_02: "Q3.",
    question_02: "日によって営業時間が違いますが何故ですか？",
    answer_02:
      "GOOD-DAYはシェアサロンなので、様々な美容師がお店に集まっています。ルールを作るのも美容師です。従って予約が無い場合には早めに営業を終了することもございます。逆に、ご相談いただければ24時間営業する場合もございます。",

    alt_03: "",
    src_03: "/campaign/Question_00.png",
    num_03: "Q4.",
    question_03: "質問4",
    answer_03: "回答4",

    alt_04: "",
    src_04: "/campaign/Question_00.png",
    num_04: "Q5.",
    question_04: "質問5",
    answer_04: "回答5",

    alt_05: "",
    src_05: "/campaign/Question_00.png",
    num_05: "Q6.",
    question_05: "質問6",
    answer_05: "回答6",

    alt_06: "",
    src_06: "/campaign/Question_00.png",
    num_06: "Q7.",
    question_06: "質問7",
    answer_06: "回答7",

    alt_07: "",
    src_07: "/campaign/Question_00.png",
    num_07: "Q8.",
    question_07: "質問8",
    answer_07: "回答8",
  };
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>{Questions.title}</h2>
        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_00}
                height={64}
                objectFit={"contain"}
                src={Questions.src_00}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_00}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_00}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_01}
                height={64}
                objectFit={"contain"}
                src={Questions.src_01}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_01}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_01}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_02}
                height={64}
                objectFit={"contain"}
                src={Questions.src_02}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_02}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_02}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_03}
                height={64}
                objectFit={"contain"}
                src={Questions.src_03}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_03}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_03}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_04}
                height={64}
                objectFit={"contain"}
                src={Questions.src_04}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_04}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_04}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_05}
                height={64}
                objectFit={"contain"}
                src={Questions.src_05}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_05}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_05}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_06}
                height={64}
                objectFit={"contain"}
                src={Questions.src_06}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_06}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_06}</p>
          </div>
        </div>

        <div
          className={`${styles.block} ${styles.adjustment_01} ${styles.background_02}`}
        >
          <ul className={`${styles.flexR} ${styles.itemC}`}>
            <li className={styles.titleImage}>
              <Image
                alt={Questions.alt_07}
                height={64}
                objectFit={"contain"}
                src={Questions.src_07}
                width={64}
              />
            </li>
            <li className={styles.question}>
              <p>{Questions.question_07}</p>
            </li>
          </ul>
          <hr />
          <div className={styles.answer}>
            <p>{Questions.answer_07}</p>
          </div>
        </div>
      </div>
    </>
  );
}
