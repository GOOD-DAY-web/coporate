import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "../../components/recruit/FAQ";
import NodaGuidelines from "./NodaGuidelines";
import MakeFriends from "../../components/home/MakeFriends";
import styles from "../../styles/Recruit/Recruit.module.scss";
import ApplicationFlow from "../Application/ApplicationFlow";

export default function Recruitment() {
  return (
    <>
      <div className={styles.mainArea}>
        <h2 className={styles.mainTitle}>Recruit</h2>
        <div className={styles.mainImage}>
          <Image
            src={"/media/Noda_sliderimg_03.jpg"}
            alt={"Recruitメインイメージ"}
            width={1920}
            height={1060}
          />
        </div>
        <div className={styles.mainTitleArea}>
          <h2 className={styles.mainTitle}>
            GOOD-DAYは、スタイリストとお客様を繋ぐ、新しい美容室です。
          </h2>
        </div>
        <>
          <h2 id="RecruitmentSummary" className={styles.subTitle}>
            募集要項
          </h2>
          <NodaGuidelines />
          <ApplicationFlow />
          <MakeFriends />
          <FAQ />
        </>
      </div>
    </>
  );
}
