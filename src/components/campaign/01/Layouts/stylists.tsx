import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../styles/campaign.module.scss";

const Stylists = () => {
  const noda_00 = {
    title_00: "スタイリスト一覧",
    shop_01: "岡山野田店",
    link_13:
      "https://sam004.salonanswer.com/sas/reserve/goodday-noda/menu/select-staff/15/",
    src_13: "/campaign/Moyashi_00.png",
    name_13: "藤原 朋也",
  };
  const nakashima_00 = {
    shop_00: "倉敷中島店",
    link_12:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/13/",
    src_12: "/campaign/Nami_00.png",
    name_12: "小野 奈美",
    link_11:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/12/",
    src_11: "/campaign/Maho_00.png",
    name_11: "土田 真帆",
    link_10:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/11/",
    src_10: "/campaign/Yuka_00.png",
    name_10: "藤原 由香",
    link_09:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/10/",
    src_09: "/campaign/Mai_00.png",
    name_09: "今石 麻依",
    link_08:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/9/",
    src_08: "/campaign/Ikemoto_00.png",
    name_08: "池本 麻紀子",
    link_07:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/8/",
    src_07: "/campaign/Fujii_00.png",
    name_07: "藤井 政美",
    link_06:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/7/",
    src_06: "/campaign/John_00.png",
    name_06: "神田 敏和",
    link_05:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/6/",
    src_05: "/campaign/Dai_00.png",
    name_05: "田邉 大将",
    link_04:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/5/",
    name_04: "natsuki",
    src_04: "/campaign/Natsuki_00.png",
    link_03:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/4/",
    name_03: "磯村 希実",
    src_03: "/campaign/Nozomi_00.png",
    link_02:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/3/",
    name_02: "田原 美華",
    src_02: "/campaign/Mika_00.png",
    link_01:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/2/",
    name_01: "かたやま はるか",
    src_01: "/campaign/Katayama_00.png",
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
              <p className={styles.title_02}>
                スタイリストを選択してください。
              </p>
            </div>
            <div className={styles.adjustment_01}>
              <div className={styles.box}>
                <ul>
                  <Link href={noda_00.link_13} passHref>
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
            <h2 className={styles.title_01}>{nakashima_00.shop_00}</h2>
            <p className={styles.title_02}>スタイリストを選択してください。</p>
          </div>
          <div className={styles.adjustment_01}>
            <div className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_12} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_12}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_12}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_09} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_09}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_09}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_08} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_08}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_08}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.adjustment_01}>
            <div className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_07} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_07}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_07}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_06} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_06}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_06}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_05} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_05}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_05}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.adjustment_01}>
            <div className={styles.flexE}>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_04} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_04}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_04}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_02} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_02}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_02}
                        </li>
                      </ul>
                    </button>
                  </Link>
                </ul>
              </div>
              <div className={styles.box}>
                <ul>
                  <Link href={nakashima_00.link_01} passHref>
                    {/* ここは各個人の一番来てほしい媒体の予約URL */}
                    <button className={styles.iconButton}>
                      <ul className={styles.inner}>
                        <li className={styles.innerMain_00}>&nbsp;</li>
                        <li className={styles.innerMain_01}>
                          <Image
                            alt={""}
                            src={nakashima_00.src_01}
                            height={1000}
                            objectFit={"contain"}
                            width={1000}
                          />
                        </li>
                        <li className={styles.innerMain_02}>
                          {nakashima_00.name_01}
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
