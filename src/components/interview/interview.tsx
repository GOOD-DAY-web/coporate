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
                <p className={styles.featuresMainTitle}>【入会半年】藤原朋也</p>
                <p className={styles.featuresMainSubTitle}>
                  大阪から岡山へ。お客様ゼロからの挑戦
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
                <p className={styles.featuresMainTitle}>【入会1ヶ月】kaho</p>
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
          </ul>
        </>
      </div>
    </>
  );
};

export default Customer;
