import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Recruit/FAQ.module.scss";

export default function FAQ() {
  const Questions = {
    title: "よくある質問(FAQ)",
    num_00: "Q1.",
    question_00: "シェアサロンとは",
    answer_00:
      "弊社の解釈になりますが、シェアサロンとは「美容師さんと弊社でフリーランス契約を結び、月額利用料をお支払いいただきセットブースをレンタルすることで、売り上げの70%を報酬としてお支払いする新しい働き方ができるヘアサロン」のことです。必要な時に必要な分だけグッディを使うことができます。",
    num_01: "Q2.",
    question_01: "会員制について",
    answer_01:
      "毎月、月額(税込)を納めていただき、GOOD-DAYを利用できる会員になっていただきます。(会員のみシェアサロンを利用することが可能です。)初回は初回登録料と、月額が必要になります。尚、解約の際は解約金は必要ありません。(ただし事前のご相談が必要です)",
    num_02: "Q3.",
    question_02: "集客サポートについて",
    answer_02:
      "ホットペッパービューティー(HPB)や、SNSを運用するなどし集客サポートをさせていただきます。グッディで働いて、ある程度の余裕が出て参りましたら個別でSNS集客のやり方やコツなどをレクチャーさせていただきます。独立の際に役立つスキルなので確実に身につけていきましょう。",
    num_03: "Q4.",
    question_03: "施術料について",
    answer_03:
      "施術料は各スタイリストで自由に設定していただきます。予めご自身で提供メニュー、料金、時間をご検討いただくとスタートがスムーズです。",
    num_04: "Q5.",
    question_04: "薬剤について",
    answer_04:
      "薬剤はご自身ご準備してください。グッディが指定する薬剤はございませんので、仕入れ、在庫管理など全てご自身でご対応ください。(一部店舗ではグッディが準備しています)",
    num_05: "Q6.",
    question_05: "営業時間について",
    answer_05:
      "お店自体は09:00〜24:00の間営業を行いますが、全ての時間勤務する必要はございません。お客様のご希望に合わせて、ご自身でスケジュールを組んでいただきます。",
    num_06: "Q7.",
    question_06: "退会について",
    answer_06:
      "退会したい場合、解約金はございません。ただし、お客様にご迷惑にならぬよう配慮をお願いします。また退会の際必要な事務手続きなどございますので、退会する場合には最低1ヶ月前にはご申告ください。",
    num_07: "Q8.",
    question_07: "入店時の準備について",
    answer_07:
      "ワゴンとロッカーのみ貸与させていただきます。それ以外の備品、薬剤などについてはご準備をお願いします。",
    num_08: "Q9.",
    question_08: "タオルにつて",
    answer_08:
      "シャンプーとタオルは店舗が提供しています。また、日用品(トイレットペーパー、掃除道具、ティッシュなど)については一部店舗側が購入しています。",
    num_09: "Q10.",
    question_09: "ドリンクについて",
    answer_09:
      "特に指定はございません。現状、各自自由に決めていただいています。",
    num_10: "Q11.",
    question_10: "について",
    answer_10: "",
  };
  return (
    <>
      <div className={styles.accordionArea}>
        <h2 id="FAQ" className={styles.accordionTitle}>
          {Questions.title}
        </h2>

        <input
          id="accordionCheck0"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck0">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_00}</span>
            <p className={styles.accordionQuestion}>{Questions.question_00}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_00}</p>
        </div>

        <input
          id="accordionCheck1"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck1">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_01}</span>
            <p className={styles.accordionQuestion}>{Questions.question_01}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_01}</p>
        </div>

        <input
          id="accordionCheck2"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck2">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_02}</span>
            <p className={styles.accordionQuestion}>{Questions.question_02}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_02}</p>
        </div>

        <input
          id="accordionCheck3"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck3">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_03}</span>
            <p className={styles.accordionQuestion}>{Questions.question_03}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_03}</p>
        </div>

        <input
          id="accordionCheck4"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck4">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_04}</span>
            <p className={styles.accordionQuestion}>{Questions.question_04}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_04}</p>
        </div>

        <input
          id="accordionCheck5"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck5">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_05}</span>
            <p className={styles.accordionQuestion}>{Questions.question_05}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_05}</p>
        </div>

        <input
          id="accordionCheck6"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck6">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_06}</span>
            <p className={styles.accordionQuestion}>{Questions.question_06}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_06}</p>
        </div>

        <input
          id="accordionCheck7"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck7">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_07}</span>
            <p className={styles.accordionQuestion}>{Questions.question_07}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_07}</p>
        </div>

        <input
          id="accordionCheck8"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck8">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_08}</span>
            <p className={styles.accordionQuestion}>{Questions.question_08}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_08}</p>
        </div>

        <input
          id="accordionCheck9"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck9">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_09}</span>
            <p className={styles.accordionQuestion}>{Questions.question_09}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_09}</p>
        </div>

        {/* <input
          id="accordionCheck10"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck10">
          <div className={styles.flexE}>
            <span className={styles.accordionNumber}>{Questions.num_10}</span>
            <p className={styles.accordionQuestion}>{Questions.question_10}</p>
          </div>
        </label>
        <div className={styles.accordionContent}>
          <p>{Questions.answer_10}</p>
        </div> */}

        {/* 必要になったタイミングで増やしましょう。
        <Link href={"/"} passHref>
          <p className={styles.more}>もっと見る</p>
        </Link> */}
      </div>
    </>
  );
}
