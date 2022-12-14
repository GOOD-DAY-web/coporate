import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./styles/campaign.module.scss";

export default function FAQ() {
  const Questions = {
    title: "よくある質問(FAQ)",
    alt_00: "",
    src_00: "/GOOD-DAY_mainLogo.png",
    num_00: "Q1.",
    question_00: "初めてなのに予約が必要なんですか？",
    answer_00: "回答1",

    alt_01: "",
    src_01: "/GOOD-DAY_mainLogo.png",
    num_01: "Q2.",
    question_01: "質問2",
    answer_01: "回答2",

    alt_02: "",
    src_02: "",
    num_02: "Q3.",
    question_02: "質問3",
    answer_02: "回答3",

    alt_03: "",
    src_03: "",
    num_03: "Q4.",
    question_03: "質問4",
    answer_03: "回答4",

    alt_04: "",
    src_04: "",
    num_04: "Q5.",
    question_04: "質問5",
    answer_04: "回答5",

    alt_05: "",
    src_05: "",
    num_05: "Q6.",
    question_05: "質問6",
    answer_05: "回答6",

    alt_06: "",
    src_06: "",
    num_06: "Q7.",
    question_06: "質問7",
    answer_06: "回答7",

    alt_07: "",
    src_07: "",
    num_07: "Q8.",
    question_07: "質問8",
    answer_07: "回答8",
  };
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>{Questions.title}</h2>

        <div className={`${styles.block} ${styles.adjustment_01}`}>
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

        <div className={`${styles.block} ${styles.adjustment_01}`}>
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
        <div className={`${styles.block} ${styles.adjustment_01}`}>
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
      </div>
    </>
  );
}
