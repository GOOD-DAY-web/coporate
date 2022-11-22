//　申込の流れ
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ApplicationOutline from "./ApplicationOutline";
import Inspection from "./Inspection";
import Documents from "./Documents";
import Deposit from "./Deposit";
import styles from "../../styles/Application/Application.module.scss";

export default function ApplicationFlow() {
  const ApplicationFlowItems = {
    title: "お申し込みの流れ",
    subTitle: "お申し込みからご利用開始まで(会員登録)",
  };
  return (
    <>
      <div className={styles.applicationFlowArea}>
        <h2 id="#ApplicationFlow" className={styles.applicationFlowMainTitle}>
          {ApplicationFlowItems.title}
        </h2>
        <h3 className={styles.applicationFlowSubTitle}>
          {ApplicationFlowItems.subTitle}
        </h3>
        <ApplicationOutline />
        <hr />
        <Inspection />
        <hr />
        <Documents />
        <hr />
        <Deposit />
      </div>
    </>
  );
}
