import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/Interview.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>インタビュー記事一覧</h2>
        <p className={styles.featuresMainSubTitle}>フリーランスという働き方への想い</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.featuresItem}>
            <Link
            href={"/interviewtomoya"}
            passHref
          >
              <Image
                className={styles.featuresImage}
                src={"/media/Tomoya_00.jpg"}
                alt={"こだわり1"}
                width={240}
                height={240}
              />
              <p className={styles.featuresMainTitle}>【入会半年】藤原朋也</p>
              <p className={styles.featuresMainSubTitle}>
                大阪から岡山へ。お客様ゼロからの挑戦
              </p>
              </Link>
            </li>
            
          </ul>
        </>
        <div className={styles.next}>
          <Link
            href={"/interviewtomoya"}
            passHref
          >
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>記事を読む</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Customer;
