import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/Interview.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>インタビュー記事一覧</h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスという働き方への想い
        </p>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Link href={"/interviewtomoya"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/tomoyainterview00.jpg"}
                  alt={"藤原朋也topイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会半年】
                  <br />
                  藤原朋也
                </p>
                <p className={styles.featuresMainSubTitle}>
                  大阪から岡山へ
                  <br />
                  お客様ゼロからの挑戦。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewtomoya"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewkaho"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/kahointerview00.jpg"}
                  alt={"kahotopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会1ヶ月】
                  <br />
                  kaho
                </p>
                <p className={styles.featuresMainSubTitle}>
                  入会1ヶ月で手取り2倍に。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewkaho"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewkatayama"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/katayamainterview00.jpg"}
                  alt={"katayamatopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会3年】
                  <br />
                  かたやまはるか
                </p>
                <p className={styles.featuresMainSubTitle}>
                  お客様ゼロからのスタート
                  <br />
                  ダブルワークでより自分らしく。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewkatayama"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Link href={"/interviewfujiwara"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewfujiwara00.jpg"}
                  alt={"fujiwaratopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  藤原由香
                </p>
                <p className={styles.featuresMainSubTitle}>
                  主婦とフリーランス美容師の両立。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewfujiwara"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewmaho"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewmaho00.jpg"}
                  alt={"mahotopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  土田真帆
                </p>
                <p className={styles.featuresMainSubTitle}>
                  業務委託ではなく
                  <br />
                  シェアサロンを選んだ理由。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewmaho"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewmai"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewmai00.jpg"}
                  alt={"maitopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  今石麻依
                </p>
                <p className={styles.featuresMainSubTitle}>
                  独立のためのステップアップとして
                  <br />
                  シェアサロンを選んだ理由。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewmai"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Link href={"/interviewkanda"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewkanda00.jpg"}
                  alt={"kandatopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  神田敏和
                </p>
                <p className={styles.featuresMainSubTitle}>
                  ステップアップのためのシェアサロン。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewkanda"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewono"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviweono00.jpg"}
                  alt={"onotopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  小野奈美
                </p>
                <p className={styles.featuresMainSubTitle}>
                  主婦とフリーランス美容師の両立。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewono"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            {/* <li className={styles.featuresItem}>
              <Link href={"/interviewisomura"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/isomura00.jpg"}
                  alt={"isomuratopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  磯村希
                </p>
                <p className={styles.featuresMainSubTitle}>
                  ステップアップとしてのシェアサロン
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewisomura"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li> */}
          </ul>
          {/* <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Link href={"/interviewikemoto"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewikwmoto000.jpg"}
                  alt={"kandatopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  池本麻紀子
                </p>
                <p className={styles.featuresMainSubTitle}>
                  ステップアップのためのシェアサロン。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewikemoto"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewmika"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewmika00.jpg"}
                  alt={"kandatopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  田原美華
                </p>
                <p className={styles.featuresMainSubTitle}>
                  主婦とフリーランス美容師の両立。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewmika"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
              <Link href={"/interviewtanabe"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewtanabe.jpg"}
                  alt={"tanabetopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  田邊大将
                </p>
                <p className={styles.featuresMainSubTitle}>
                  ステップアップのためのシェアサロン。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewtanabe"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.featuresItem}>
              <Link href={"/interviewnatsuki"} passHref>
                <Image
                  className={styles.featuresImage}
                  src={"/media/interviewnatuki.jpg"}
                  alt={"natsukitopイメージ"}
                  width={240}
                  height={240}
                />
                <p className={styles.featuresMainTitle}>
                  【入会2年】
                  <br />
                  natsuki
                </p>
                <p className={styles.featuresMainSubTitle}>
                  お客様に寄り添いたい。
                </p>
              </Link>
              <div className={styles.next}>
                <Link href={"/interviewnatsuki"} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>記事を読む</span>
                  </div>
                </Link>
              </div>
            </li>
          </ul> */}
        </>
      </div>
    </>
  );
};

export default Customer;
