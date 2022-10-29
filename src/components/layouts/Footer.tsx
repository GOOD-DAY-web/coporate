import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../home/UnderNotice";
import data from "../../data/shops.json";

export default function Footer() {
  const nakashima = data.nakashima;
  const noda = data.noda;
  return (
    <footer className={styles.mainFooter}>
      <ToTopButton />
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/"} passHref>
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
          <Link href={"/stylist"} passHref>
            <p className={styles.footerTitle}>Stylist</p>
          </Link>
          <div className={styles.footerUl}>
            {nakashima.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <li>{shop.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
          <div className={styles.footerUl}>
            {noda.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <li>{shop.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/service"} passHref>
            <p className={styles.footerTitle}>Service</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/service/#Customer"} passHref>
              <li>お客様へ</li>
            </Link>
            <Link href={"/service/#ToStylist"} passHref>
              <li>スタイリスト向け</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
            <p className={styles.footerTitle}>Philosophy</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/philosophy"} passHref>
              <li>大切にしたいこと</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/recruit"} passHref>
            <p className={styles.footerTitle}>Recruit</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/recruit/#RecruitmentSummary"} passHref>
              <li>募集概要</li>
            </Link>
            <Link href={"/recruit/#FAQ"} passHref>
              <li>よくある質問(FAQ)</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <p className={styles.footerTitle}>Company</p>
          <ul className={styles.footerUl}>
            <Link href={"/company/#NewShop"} passHref>
              <li>新店舗情報</li>
            </Link>
            <Link href={"/company/#Nakashima"} passHref>
              <li>倉敷中島店</li>
            </Link>
            <Link href={"/company/#Corporation"} passHref>
              <li>運営会社</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.rules}>
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
      </div>
      <p className={styles.footerCopyLight}>&copy; 2022 OneStep inc.</p>
    </footer>
  );
}

export const getStaticProps = async () => {
  return {
    props: data,
  };
};
