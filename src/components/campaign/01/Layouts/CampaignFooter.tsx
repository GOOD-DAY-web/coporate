import Link from "next/link";
import Image from "next/image";
import styles from "../../../../styles/Layouts/Footer.module.scss";
import ToTopButton from "./ToTopButton";
import UnderNotice from "./UnderNotice";

export function CampaignFooter() {
  return (
    <footer className={styles.mainFooter}>
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/campaign"} passHref>
            <Image
              className={styles.footerImage}
              src={"/media/GOOD-DAY_mainLogo_05.png"}
              alt={"GOOD-DAY メインロゴ"}
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div className={styles.footerBrock}>
          <Link href={"/compaign"} passHref>
            <p className={styles.footerTitle}>お客様ご紹介キャンペーン</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"https://www.yk-net.co.jp/"} passHref>
              <li className={styles.footerLi}>株式会社ワイケイ</li>
            </Link>
            <Link href={"https://www.goodday-salon.com/"} passHref>
              <li className={styles.footerLi}>シェアサロンGOOD-DAY</li>
            </Link>
          </ul>
        </div>

        {/* <div className={styles.footerBrock}>
          <Link href={"/compaign"} passHref>
            <p className={styles.footerTitle}>Title</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
          </ul>
        </div>

        <div className={styles.footerBrock}>
          <Link href={"/compaign"} passHref>
            <p className={styles.footerTitle}>Title</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
          </ul>
        </div>

        <div className={styles.footerBrock}>
          <Link href={"/compaign"} passHref>
            <p className={styles.footerTitle}>Title</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
            <Link href={"/compaign"} passHref>
              <li>リスト</li>
            </Link>
          </ul>
        </div> */}
      </div>

      {/* <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/sitepolicy"} passHref>
              <li>Webサイトの利用条件</li>
            </Link>
            <Link href={"/privacypolicy"} passHref>
              <li>プライバシーポリシー</li>
            </Link>
          </ul>
        </div>
      </div> */}
      <p className={styles.footerCopyLight}>&copy; 2022 OneStep inc.</p>
    </footer>
  );
}
