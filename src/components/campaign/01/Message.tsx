import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "./Layouts/Button";
import styles from "./styles/campaign.module.scss";

export default function Message() {
  const noda_00 = {
    title_00: "メッセージ",
    shop_01: "岡山野田店",
    src_13: "/campaign/Moyashi_00.png",
    link_13:
      "https://sam004.salonanswer.com/sas/reserve/goodday-noda/menu/select-staff/15/",
    name_13: "藤原 朋也",
    message_13: "藤原メッセージ",
  };
  const nakashima_00 = {
    shop_00: "倉敷中島店",

    src_12: "/campaign/Nami_00.png",
    link_12:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/13/",
    name_12: "小野 奈美",
    message_12: "小野のメッセージ",

    src_11: "/campaign/Maho_00.png",
    link_11:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/12/",
    name_11: "土田 真帆",
    message_11: "土田のメッセージ",

    src_10: "/campaign/Yuka_00.png",
    link_10:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/11/",
    name_10: "藤原 由香",
    message_10: "藤原のメッセージ",

    src_09: "/campaign/Mai_00.png",
    link_09:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/10/",
    name_09: "今石 麻依",
    message_09: "今石のメッセージ",

    src_08: "/campaign/Ikemoto_00.png",
    link_08:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/9/",
    name_08: "池本 麻紀子",
    message_08: "池本のメッセージ",

    src_07: "/campaign/Fujii_00.png",
    link_07:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/8/",
    name_07: "藤井 政美",
    message_07: "藤井のメッセージ",

    src_06: "/campaign/John_00.png",
    link_06:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/7/",
    name_06: "神田 敏和",
    message_06: "神田のメッセージ",

    src_05: "/campaign/Dai_00.png",
    link_05:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/6/",
    name_05: "田邉 大将",
    message_05: "田邉のメッセージ",

    src_04: "/campaign/Natsuki_00.png",
    link_04:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/5/",
    name_04: "natsuki",
    message_04: "natsukiのメッセージ",

    src_03: "/campaign/Nozomi_00.png",
    link_03:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/4/",
    name_03: "磯村 希実",
    message_03: "磯村のメッセージ",

    src_02: "/campaign/Mika_00.png",
    link_02:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/3/",
    name_02: "田原 美華",
    message_02: "田原のメッセージ",

    src_01: "/campaign/Katayama_00.png",
    link_01:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/2/",
    name_01: "かたやま はるか",
    message_01: "かたやまのメッセージ",
  };
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>{noda_00.title_00}</h2>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={noda_00.link_13} passHref>
                  <Image
                    className={styles.articleImage}
                    src={noda_00.src_13}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{noda_00.name_13}</li>
                    <li className={styles.text}>{noda_00.message_13}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={noda_00.link_13} passHref>
                <Button
                  props={`${noda_00.name_13}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_12} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_12}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_12}</li>
                    <li className={styles.text}>{nakashima_00.message_12}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_12} passHref>
                <Button
                  props={`${nakashima_00.name_12}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_09} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_09}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_09}</li>
                    <li className={styles.text}>{nakashima_00.message_09}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_09} passHref>
                <Button
                  props={`${nakashima_00.name_09}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_08} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_08}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_08}</li>
                    <li className={styles.text}>{nakashima_00.message_08}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_08} passHref>
                <Button
                  props={`${nakashima_00.name_08}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_07} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_07}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_07}</li>
                    <li className={styles.text}>{nakashima_00.message_07}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_07} passHref>
                <Button
                  props={`${nakashima_00.name_07}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_06} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_06}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_06}</li>
                    <li className={styles.text}>{nakashima_00.message_06}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_06} passHref>
                <Button
                  props={`${nakashima_00.name_06}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_05} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_05}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_05}</li>
                    <li className={styles.text}>{nakashima_00.message_05}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_05} passHref>
                <Button
                  props={`${nakashima_00.name_05}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_04} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_04}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_04}</li>
                    <li className={styles.text}>{nakashima_00.message_04}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_04} passHref>
                <Button
                  props={`${nakashima_00.name_04}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_02} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_02}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_02}</li>
                    <li className={styles.text}>{nakashima_00.message_02}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_02} passHref>
                <Button
                  props={`${nakashima_00.name_02}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_01} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_01}
                    alt={""}
                    width={1200}
                    height={830}
                    objectFit={"contain"}
                  />
                </Link>
              </div>
              <div className={styles.rightArea}>
                <div className={styles.rightAreaInner}>
                  <ul>
                    <li className={styles.title}>{nakashima_00.name_01}</li>
                    <li className={styles.text}>{nakashima_00.message_01}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_01} passHref>
                <Button
                  props={`${nakashima_00.name_01}
                  ${"で予約する"}`}
                  text={"\\ 予約に進む /"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
