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
    question_03: "ワイケイで制約とありますがどういうことですか？",
    answer_03:
      "ワイケイで賃貸を借りられた方や、土地や不動産をご成約された方には更に20%割引チケットを3枚進呈いたします。詳しくはワイケイ店舗にてご確認ください。",

    alt_04: "",
    src_04: "/campaign/Question_00.png",
    num_04: "Q5.",
    question_04: "チラシはどこで手に入りますか？",
    answer_04:
      "ワイケイ各店舗にて配布しています。該当店舗はアパマンショップ倉敷駅前店、アパマンショップ倉敷沖新店、アパマンショップ倉敷水島店、アパマンショップ新倉敷駅前店にてお声かけください。",

    alt_05: "",
    src_05: "/campaign/Question_00.png",
    num_05: "Q6.",
    question_05: "チラシ、チケットの使用期限が切れた場合、使用できませんか？",
    answer_05: "大変申し訳ございません。使用することはできません。",

    alt_06: "",
    src_06: "/campaign/Question_00.png",
    num_06: "Q7.",
    question_06: "チラシを別の店舗でもらえば割引は2回適用されますか？",
    answer_06:
      "申し訳ございません。適用できません。GOOD-DAYでは来店履歴を記録しており、初めてのお客様のみが本キャンペーンの適用者になります。",

    alt_07: "",
    src_07: "/campaign/Question_00.png",
    num_07: "Q8.",
    question_07: "当日チラシを忘れてしまいました。割引だけしてくれますか？",
    answer_07:
      "大変申し訳ございません。本キャンペーンは当日チラシ、クーポンをお持ちいただかないと割引ができません。お忘れの場合には次回ご来店時にお持ちください。",
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
