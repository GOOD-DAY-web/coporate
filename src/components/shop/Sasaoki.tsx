import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Shops.module.scss";

export default function ShimonakanoShopInfo() {
  return (
    <>
      <div id="Nakashima" className={styles.main}>
        <h2 className={styles.menuTitle}>
          倉敷笹沖店
          <br />
          <br />
          2023年10月末ごろオープン予定！
          <br />
          <br />
          スタイリスト募集中
        </h2>
      </div>
    </>
  );
}
