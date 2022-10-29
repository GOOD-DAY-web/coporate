import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Stylists</h2>
        <p className={styles.mainSubTitle}>スタイリスト一覧</p>
      </div>
      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            <Link href={"/stylist/tomoya"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Tomoya_01.jpg"}
                  alt={"tomoya"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/nami"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Nami_01.jpg"}
                  alt={"Nami"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/maho"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Maho_01.jpg"}
                  alt={"Maho"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/yuka"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Yuka_01.jpg"}
                  alt={"Yuka"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/mai"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Mai_01.jpg"}
                  alt={"Mai"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/ikemoto"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Ikemoto_01.jpg"}
                  alt={"Ikemoto"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/fujii"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Fujii_01.jpg"}
                  alt={"Fujii"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/john"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/John_01.jpg"}
                  alt={"John"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/dai"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Dai_03.jpg"}
                  alt={"Dai"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/natsuki"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Natsuki_01.jpg"}
                  alt={"Natsuki"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/nozomi"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Nozomi_01.jpg"}
                  alt={"Nozomi"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/mika"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Mika_01.jpg"}
                  alt={"Mika"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
            <Link href={"/stylist/katayama"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Katayama_01.jpg"}
                  alt={"Katayama"}
                  width={240}
                  height={240}
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staffs;
