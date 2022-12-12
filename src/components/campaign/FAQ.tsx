import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./campaign.module.scss";

export default function FAQ() {
  const Questions = {
    title: "よくある質問(FAQ)",
    num_00: "Q1.",
    question_00: "質問1",
    answer_00: "回答1",
    num_01: "Q2.",
    question_01: "質問2",
    answer_01: "回答2",
    num_02: "Q3.",
    question_02: "質問3",
    answer_02: "回答3",
    num_03: "Q4.",
    question_03: "質問4",
    answer_03: "回答4",
    num_04: "Q5.",
    question_04: "質問5",
    answer_04: "回答5",
    num_05: "Q6.",
    question_05: "質問6",
    answer_05: "回答6",
    num_06: "Q7.",
    question_06: "質問7",
    answer_06: "回答7",
    num_07: "Q8.",
    question_07: "質問8",
    answer_07: "回答8",
  };
  return (
    <>
      <div className={styles.main}></div>
    </>
  );
}
