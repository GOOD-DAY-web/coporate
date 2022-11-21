// 申込概要
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function ApplicationOutline() {
  const ApplicationOutlineItems_00 = {
    title: "STEP1",
    src: "/media/howToUse_00.png",
    alt: "STEP1の画像です",
    text: "サロン見学",
  };
  const ApplicationOutlineItems_01 = {
    title: "STEP2",
    src: "/media/howToUse_01.png",
    alt: "STEP2の画像です",
    text: "必要書類の記入&提出",
  };
  const ApplicationOutlineItems_02 = {
    title: "STEP3",
    src: "/media/howToUse_03.png",
    alt: "STEP3の画像です",
    text: "会員登録日/施設利用料のご入金",
  };
  const ArrowImagePC = {
    src: "/media/howToUse_04.png",
    alt: "矢印",
  };
  const ArrowImageSP = {
    src: "/media/howToUse_05.png",
    alt: "矢印",
  };
  const ApplicationOutlineText = {
    text: "サロン見学、必要書類の作成、ご入金を経て利用開始となります。システム登録なども含まれますので最速で2週間はお時間をいただいております。",
  };
  return (
    <>
      <div className={styles.flexE}>
        <div className={styles.flow}>
          <h3>{ApplicationOutlineItems_00.title}</h3>
          <Image
            className=""
            src={ApplicationOutlineItems_00.src}
            alt={ApplicationOutlineItems_00.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_00.text}</p>
        </div>
        <div className={styles.allowImagePC}>
          <Image
            src={ArrowImagePC.src}
            alt={ArrowImagePC.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.allowImageSP}>
          <Image
            src={ArrowImageSP.src}
            alt={ArrowImageSP.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.flow}>
          <h3>{ApplicationOutlineItems_01.title}</h3>
          <Image
            className=""
            src={ApplicationOutlineItems_01.src}
            alt={ApplicationOutlineItems_01.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_01.text}</p>
        </div>
        <div className={styles.allowImagePC}>
          <Image
            className=""
            src={ArrowImagePC.src}
            alt={ArrowImagePC.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.allowImageSP}>
          <Image
            src={ArrowImageSP.src}
            alt={ArrowImageSP.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.flow}>
          <h3>{ApplicationOutlineItems_02.title}</h3>
          <Image
            className=""
            src={ApplicationOutlineItems_02.src}
            alt={ApplicationOutlineItems_02.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_02.text}</p>
        </div>
      </div>
      <div className={styles.applicationText}>
        <p>{ApplicationOutlineText.text}</p>
      </div>
    </>
  );
}
