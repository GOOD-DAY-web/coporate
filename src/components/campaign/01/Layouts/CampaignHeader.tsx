import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState } from "react";
import styles from "../../../../styles/Layouts/Header.module.scss";
import HamburgerMenu from "./HamburgerMenu";

export default function CampaignHeader() {
  return (
    <>
      <HamburgerMenu />
      <header id="header" className={styles.header}>
        <div className={styles.flexB}>
          <ul className={styles.news}>
            <li>{/* お知らせが入るエリア */}</li>
          </ul>
          <ul className={styles.logo}>
            <Link href={"/campaign"} passHref>
              <li>
                <Image
                  src="/GOOD-DAY_mainLogo.png"
                  alt=""
                  height={50}
                  width={50}
                  objectFit={"contain"}
                />
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}
