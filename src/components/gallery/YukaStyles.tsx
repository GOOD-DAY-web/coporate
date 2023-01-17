import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const stylistName: string = "藤原 由香";

const YukaStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <Link href={"/stylist/yuka"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Yuka_00.jpg"}
              alt={stylistName + "のスタイル1です。"}
              objectFit="contain"
              width={178}
              height={240}
            />
            <div className={styles.stylistMask}>
              <p className={styles.stylistCaption}>
                Provided by
                <br />
                {stylistName}
              </p>
            </div>
          </li>
        </Link>
        <Link href={"/stylist/yuka"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Yuka_01.jpg"}
              alt={stylistName + "のスタイル2です。"}
              objectFit="contain"
              width={178}
              height={240}
            />
            <div className={styles.stylistMask}>
              <p className={styles.stylistCaption}>
                Provided by
                <br />
                {stylistName}
              </p>
            </div>
          </li>
        </Link>
        <Link href={"/stylist/yuka"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Yuka_02.jpg"}
              alt={stylistName + "のスタイル3です。"}
              objectFit="contain"
              width={178}
              height={240}
            />
            <div className={styles.stylistMask}>
              <p className={styles.stylistCaption}>
                Provided by
                <br />
                {stylistName}
              </p>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default YukaStyles;
