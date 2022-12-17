import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../styles/campaign.module.scss";

const Stylists = () => {
  const noda_00 = {
    title_00: "スタイリスト一覧",
    shop_01: "岡山野田店",
    link_13: "",
    src_13: "/campaign/Moyashi_00.png",
    name_13: "藤原 朋也",
  };
  const nakashima_02 = {
    shop_00: "倉敷中島店",
    link_12: "",
    src_12: "/campaign/Nami_12.jpg",
    name_12: "小野 奈美",
    link_11: "",
    src_11: "/campaign/Maho_11.jpg",
    name_11: "土田 真帆",
    link_10: "",
    src_10: "/campaign/Yuka_10.jpg",
    name_10: "藤原 由香",
    link_09: "",
    src_09: "/campaign/Mai_09.jpg",
    name_09: "今石 麻依",
  };
  const nakashima_01 = {
    shop_00: "倉敷中島店",
    link_08: "",
    src_08: "/campaign/Maki_08.jpg",
    name_08: "池本 麻紀子",
    link_07: "",
    src_07: "/campaign/Fujii_07.jpg",
    name_07: "藤井 政美",
    link_06: "",
    src_06: "/campaign/John_06.jpg",
    name_06: "神田 敏和",
    link_05: "",
    src_05: "/campaign/Dai_5.jpg",
    name_05: "田邉 大将",
  };
  const nakashima_00 = {
    shop_00: "倉敷中島店",
    link_04: "",
    name_04: "natsuki",
    src_04: "/campaign/Natsuki_04.jpg",
    link_03: "",
    name_03: "磯村 希実",
    src_03: "/campaign/Nozomi_03.jpg",
    link_02: "",
    name_02: "田原 美華",
    src_02: "/campaign/Mika_02.jpg",
    link_01: "",
    name_01: "かたやま はるか",
    src_01: "/campaign/Katayama_01.jpg",
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.adjustment_01}>
          <h2 id={"stylists"} className={styles.title}>
            {noda_00.title_00}
          </h2>
        </div>
        <div className={styles.adjustment_01}>
          <div className={styles.block}>
            <div className={styles.adjustment_01}>
              <h2 className={styles.title_01}>{noda_00.shop_01}</h2>
            </div>
            <div className={styles.adjustment_01}>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={noda_00.src_13}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {noda_00.name_13}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.adjustment_01}>
            <h2 className={styles.title_01}>{nakashima_02.shop_00}</h2>
          </div>
          <div className={styles.adjustment_01}>
            <div className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={"/campaign/Moyashi_00.png"}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_02.name_12}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={"/campaign/Moyashi_00.png"}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_02.name_11}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={"/campaign/Moyashi_00.png"}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_02.name_10}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={"/"} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={"/campaign/Moyashi_00.png"}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_02.name_09}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stylists;
