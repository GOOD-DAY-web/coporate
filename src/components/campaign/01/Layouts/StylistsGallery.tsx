import React from "react";
// sudo yarn add @types/react-image-gallery でエラーを解消
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../styles/campaign.module.scss";

const StylistsGallery = () => {
  const images = [
    {
      originalTitle: "藤原 朋也" + "岡山野田店",
      original: "/campaign/Moyashi_13.jpg",
      originalAlt: "",
      originalClass: `${styles.showText}`,
      thumbnailTitl: "藤原 朋也" + "岡山野田店",
      thumbnail: "/campaign/Moyashi_13.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "小野 奈美" + "倉敷中島店",
      original: "/campaign/Nami_12.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "小野 奈美" + "倉敷中島店",
      thumbnail: "/campaign/Nami_12.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    // {
    //   originalTitle: "土田 真帆" + "倉敷中島店",
    //   original: "/campaign/Maho_11.jpg",
    //   originalAlt: "",
    //   originalClass: `${styles.fillText}`,
    //   thumbnailTitl: "土田 真帆" + "倉敷中島店",
    //   thumbnail: "/campaign/Maho_11.jpg",
    //   thumbnailAlt: "",
    //   thumbnailClass: `${styles.select}`,
    // },
    // {
    //   originalTitle: "藤原 由香" + "倉敷中島店",
    //   original: "/campaign/Yuka_10.jpg",
    //   originalAlt: "",
    //   originalClass: `${styles.fillText}`,
    //   thumbnailTitl: "藤原 由香" + "倉敷中島店",
    //   thumbnail: "/campaign/Yuka_10.jpg",
    //   thumbnailAlt: "",
    //   thumbnailClass: `${styles.select}`,
    // },
    {
      originalTitle: "今石 麻依" + "倉敷中島店",
      original: "/campaign/Mai_09.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "今石 麻依" + "倉敷中島店",
      thumbnail: "/campaign/Mai_09.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "池本 麻紀子" + "倉敷中島店",
      original: "/campaign/Maki_08.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "池本 麻紀子" + "倉敷中島店",
      thumbnail: "/campaign/Maki_08.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "藤井 政美" + "倉敷中島店",
      original: "/campaign/Fujii_07.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "藤井 政美" + "倉敷中島店",
      thumbnail: "/campaign/Fujii_07.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "神田 敏和" + "倉敷中島店",
      original: "/campaign/John_06.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "神田 敏和" + "倉敷中島店",
      thumbnail: "/campaign/John_06.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "田邉 大将" + "倉敷中島店",
      original: "/campaign/Dai_5.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "田邉 大将" + "倉敷中島店",
      thumbnail: "/campaign/Dai_5.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "natsuki" + "倉敷中島店",
      original: "/campaign/Natsuki_04.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "natsuki" + "倉敷中島店",
      thumbnail: "/campaign/Natsuki_04.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "田原 美華" + "倉敷中島店",
      original: "/campaign/Mika_02.jpg",
      originalAlt: "",
      originalClass: `${styles.fillText}`,
      thumbnailTitl: "田原 美華" + "倉敷中島店",
      thumbnail: "/campaign/Mika_02.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
    {
      originalTitle: "かたやま はるか" + "倉敷中島店",
      original: "/campaign/Katayama_01.jpg",
      originalAlt: "",
      originalClass: "",
      thumbnailTitl: "かたやま はるか" + "倉敷中島店",
      thumbnail: "/campaign/Katayama_01.jpg",
      thumbnailAlt: "",
      thumbnailClass: `${styles.select}`,
    },
  ];
  return (
    <>
      <ImageGallery items={images} />
    </>
  );
};

export default StylistsGallery;
