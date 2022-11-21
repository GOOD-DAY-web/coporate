//　申込の流れ
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Application/Application.module.scss";
import ApplicationOutline from "../../components/Application/ApplicationOutline";

export default function ApplicationFlow() {
  const ApplicationFlowItems = {
    title: "お申し込みの流れ",
    subTitle: "お申し込みからご利用開始まで(会員登録)",
  };
  return (
    <>
      <div className={styles.applicationFlowArea}>
        <h1 className={styles.applicationFlowMainTitle}>
          {ApplicationFlowItems.title}
        </h1>
        <h2 className={styles.applicationFlowSubTitle}>
          {ApplicationFlowItems.subTitle}
        </h2>
        <ApplicationOutline />
      </div>
    </>
  );
}
