import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const stylistName: string = "田原 美華";

const MikaStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <Link href={"/stylist/mika"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Mika_00.jpg"}
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
        <Link href={"/stylist/mika"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Mika_01.jpg"}
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
        <Link href={"/stylist/mika"}>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/Mika_02.jpg"}
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

export default MikaStyles;
