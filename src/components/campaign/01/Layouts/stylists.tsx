import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../styles/campaign.module.scss";

const Stylists = () => {
  const items = {
    title_00: "スタイリスト一覧",
    shop_01: "岡山野田店",
    name_13: "藤原 朋也",
    img_13: "/campaign/Moyashi_13.jpg",
    shop_00: "倉敷中島店",
    name_00: "",
    name_01: "かたやま はるか",
    img_01: "/campaign/Katayama_01.jpg",
    name_02: "田原 美華",
    img_02: "/campaign/Mika_02.jpg",
    name_03: "磯村 希実",
    img_03: "/campaign/Nozomi_03.jpg",
    name_04: "natsuki",
    img_04: "/campaign/Natsuki_04.jpg",
    name_05: "田邉 大将",
    img_05: "/campaign/Dai_5.jpg",
    name_06: "神田 敏和",
    img_06: "/campaign/John_06.jpg",
    name_07: "藤井 政美",
    img_07: "/campaign/Fujii_07.jpg",
    name_08: "池本 麻紀子",
    img_08: "/campaign/Maki_08.jpg",
    name_09: "今石 麻依",
    img_09: "/campaign/Mai_09.jpg",
    name_10: "藤原 由香",
    img_10: "/campaign/Yuka_10.jpg",
    name_11: "土田 真帆",
    img_11: "/campaign/Maho_11.jpg",
    name_12: "小野 奈美",
    img_12: "/campaign/Nami_12.jpg",
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.adjustment_01}>
          <h2 className={styles.title}>{items.title_00}</h2>
        </div>
        <div className={styles.adjustment_01}>
          <div className={styles.block}>
            <div className={styles.adjustment_01}>
              <h2 className={styles.title_01}>{items.shop_01}</h2>
            </div>
            <div className={styles.box}>
              <ul>
                <Link href={"/"} passHref>
                  {/* ここは各個人の一番来てほしい媒体の予約URL */}
                  <li className={styles.img}>
                    <Image
                      alt={""}
                      height={100}
                      objectFit={"contain"}
                      src={items.img_13}
                      width={100}
                    />
                  </li>
                </Link>
                <li className={styles.textC}>{items.name_13}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.adjustment_01}>
            <h2 className={styles.title_01}>{items.shop_00}</h2>
          </div>
          <div className={styles.adjustment_01}>
            <div className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_12}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_12}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_11}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_11}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_10}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_10}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_09}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_09}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.adjustment_01}>
            <ul className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_08}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_08}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_07}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_07}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_06}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_06}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_05}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_05}</li>
                </ul>
              </div>
            </ul>
          </div>
          <div className={styles.adjustment_01}>
            <ul className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_04}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_04}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_03}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_03}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_02}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_02}</li>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    <li className={styles.img}>
                      <Image
                        alt={""}
                        height={100}
                        objectFit={"contain"}
                        src={items.img_01}
                        width={100}
                      />
                    </li>
                  </Link>
                  <li className={styles.textC}>{items.name_01}</li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stylists;
