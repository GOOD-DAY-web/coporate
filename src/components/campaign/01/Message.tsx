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
    message_13:
      "ショート•ボブは僕にお任せください！必ず「似合う」をご提案いたします！",
  };
  const nakashima_00 = {
    shop_00: "倉敷中島店",

    src_12: "/campaign/Nami_00.png",
    link_12:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/13/",
    name_12: "小野 奈美",
    message_12:
      "小野 [藤九(トウク)] 奈美です。丁寧なカウンセリングでお悩み解決いたします♪最初から最後まで私が責任持って担当させていただき、好みを考慮した上でアドバイスもさせて頂きますね♪。個室でゆっくりしたい方もお待ちしています！",

    src_11: "/campaign/Maho_00.png",
    link_11:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/12/",
    name_11: "土田 真帆",
    message_11:
      "髪質や骨格に合わせてヘアスタイルのご提案をいたします。お一人お一人に向き合い、丁寧にカウンセリングすることでお客様ににぴったりのスタイルを形にします☆不安やご要望などなんでもお聞かせください！わくわくする髪型とあなただけの美容時間を一緒に楽しみましょう♪",

    src_10: "/campaign/Yuka_00.png",
    link_10:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/11/",
    name_10: "藤原 由香",
    message_10:
      "お客様の髪の悩み、髪質をしっかり考え、お客様に合ったなりたいヘアスタイル、手入れのしやすい髪型をご提案します(^^)2kidsママ美容師です！同じ立場で考え忙しいママさんやお仕事をされている方に毎日楽しく素敵に過ごせるヘアスタイルを提供いたします！個室でゆったりとした時間をお過ごしくださいませ♪",

    src_09: "/campaign/Mai_00.png",
    link_09:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/10/",
    name_09: "今石 麻依",
    message_09:
      "ヘアーを通して、毎日を楽しく過ごしていただけるようにお手伝いさせていただきます。個室でゆっくり、一人一人丁寧にさせていただきますので何でもご相談ください！あなたのなりたいに近づけていきましょう!!",

    src_08: "/campaign/Ikemoto_00.png",
    link_08:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/9/",
    name_08: "池本 麻紀子",
    message_08:
      "丁寧なカウンセリング、アフターケアまでしっかりとお話しさせていただきます。クセ・白髪・エイジング毛など、お客様の悩みに寄り添い、半年後、1年後にどんなイメージになりたいか？一緒に考え、喜びを感じられるスタイル作りをご提案します。",

    src_07: "/campaign/Fujii_00.png",
    link_07:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/8/",
    name_07: "藤井 政美",
    message_07:
      "日々のお手入れが楽なスタイル作りを心がけています。髪のお悩みをご相談ください。得意なスタイルは【ナチュラル系・お手入れの楽なスタイル作り】髪のお悩みを解消できるよう丁寧なカウンセリングと施術を心がけています♪",

    src_06: "/campaign/John_00.png",
    link_06:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/7/",
    name_06: "神田 敏和",
    message_06:
      "◆スタイリスト歴12年で学んだ経験と技術により顧客リピート率90%以上◆丁寧をモットーにお客様の「なりたい」を叶えられるように責任を持って全力で担当させて頂きます！！簡単にスタイリングできるスタイル、お客様の髪質、骨格に合わせたスタイル提案も得意です。髪の毛のお悩みなど何でも相談してください◎",

    src_05: "/campaign/Dai_00.png",
    link_05:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/6/",
    name_05: "田邉 大将",
    message_05:
      "美容師を通じて人との出会いを1番大切にしていきたいなと考えてます。一人一人に合ったスタイルの提案をレディース、メンズ問わずさせていただきます。「イメージを変えたい!!」、「いつものスタイルにマンネリ化している。」そういった方は是非ご指名ください!",

    src_04: "/campaign/Natsuki_00.png",
    link_04:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/5/",
    name_04: "natsuki",
    message_04:
      "お客様のお顔の形のバランスや、お客様の雰囲気に合うように可愛く見えるようにカットしたり、カッコよく見えるようにイメージしながらカットしています(*^_^*)ゆったり寛ぎたい方や、リラックスしたい方に、癒しの時間をご提供したいです(*^_^*)事前に相談されたい場合は公式LINEなどからご相談くださいませ♪",

    src_03: "/campaign/Nozomi_00.png",
    link_03:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/4/",
    name_03: "磯村 希実",
    message_03:
      "大切なお時間を使ってきていただきありがとうございます。喜んでいただけるようがんばります！",

    src_02: "/campaign/Mika_00.png",
    link_02:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/3/",
    name_02: "田原 美華",
    message_02:
      "お客様お一人お一人との出会いを大切にしています♡髪の毛のキレイはもちろんですが、疲れた時や悩んだ時には心も体もリフレッシュしていただける…そんな癒しの場所になれるようにがんばります♡",

    src_01: "/campaign/Katayama_00.png",
    link_01:
      "https://sam004.salonanswer.com/sas/reserve/goodday/menu/select-staff/2/",
    name_01: "かたやま はるか",
    message_01:
      "担当させていただくお客様のほとんどがショートヘア・ボブスタイルをオーダーされます♪一人ひとりの生え癖や髪質に合わせてお客様の「なりたい！」に寄り添えるようにカットしており、スタイリング方法も提案させていただきます！美容室が苦手な方でも居心地のいいものになるように心がけております♪ぜひお任せください！",
  };
  return (
    <>
      <div className={styles.area}>
        <h2 className={styles.title}>{noda_00.title_00}</h2>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_02}`}>
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
                  text={"\\ 岡山野田店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_11} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_11}
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
                    <li className={styles.title}>{nakashima_00.name_11}</li>
                    <li className={styles.text}>{nakashima_00.message_11}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_11} passHref>
                <Button
                  props={`${nakashima_00.name_11}
                  ${"で予約する"}`}
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className={styles.main}>
          <div className={styles.block}>
            <div className={styles.flexE}>
              <div className={styles.leftArea}>
                <Link href={nakashima_00.link_10} passHref>
                  <Image
                    className={styles.articleImage}
                    src={nakashima_00.src_10}
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
                    <li className={styles.title}>{nakashima_00.name_10}</li>
                    <li className={styles.text}>{nakashima_00.message_10}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.messageButton}>
              <Link href={nakashima_00.link_10} passHref>
                <Button
                  props={`${nakashima_00.name_10}
                  ${"で予約する"}`}
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div> */}

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={`${styles.block} ${styles.background_05}`}>
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
                  text={"\\ 倉敷中島店 /"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
