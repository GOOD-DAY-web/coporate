import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "../../components/recruit/FAQ";
import NodaGuidelines from "./NodaGuidelines";
import MakeFriends from "../../components/home/MakeFriends";
import styles from "../../styles/Recruit/Recruit.module.scss";
import ApplicationFlow from "../Application/ApplicationFlow";

export default function Recruitment() {
  const RecruitmentItems = {
    title: "Recruit",
    src: "/media/Noda_sliderimg_03.jpg",
    alt: "Recruitメインイメージ",
    copy: "美容師として本気出せ!!",
    subTitle: "募集要項",
  };
  return (
    <>
      <div className={styles.mainArea}>
        <h2 className={styles.mainTitle}>{RecruitmentItems.title}</h2>
        <div className={styles.mainImage}>
          <Image
            src={RecruitmentItems.src}
            alt={RecruitmentItems.alt}
            width={1920}
            height={1060}
          />
        </div>
        <div className={styles.mainTitleArea}>
          <h2 className={styles.mainTitle}>{RecruitmentItems.copy}</h2>
        </div>
        <>
          <h2 id="RecruitmentSummary" className={styles.subTitle}>
            {RecruitmentItems.subTitle}
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
