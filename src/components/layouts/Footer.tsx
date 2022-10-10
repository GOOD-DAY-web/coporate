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
            <a>
              <Image
                className=""
                src={"/media/GOOD-DAY_mainLogo_05.png"}
                objectFit="contain"
                alt={"GOOD-DAY メインロゴ"}
                width={80}
                height={80}
              />
            </a>
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/stylist"} passHref>
            <a>
              <p className={styles.footerTitle}>Stylist</p>
            </a>
          </Link>
          <div className={styles.footerUl}>
            {nakashima.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <a>
                      <li>{shop.name}</li>
                    </a>
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
                    <a>
                      <li>{shop.name}</li>
                    </a>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/service"} passHref>
            <a>
              <p className={styles.footerTitle}>Service</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/service/#Customer"} passHref>
              <a>
                <li>お客様へ</li>
              </a>
            </Link>
            <Link href={"/service/#ToStylist"} passHref>
              <a>
                <li>スタイリスト向け</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
            <a>
              <p className={styles.footerTitle}>Philosophy</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/philosophy"} passHref>
              <a>
                <li>大切にしたいこと</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/recruit"} passHref>
            <a>
              <p className={styles.footerTitle}>Recruit</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/recruit/#RecruitmentSummary"} passHref>
              <a>
                <li>募集概要</li>
              </a>
            </Link>
            <Link href={"/recruit/#FAQ"} passHref>
              <a>
                <li>よくある質問(FAQ)</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <p className={styles.footerTitle}>Company</p>
          <ul className={styles.footerUl}>
            <Link href={"/company/#NewShop"} passHref>
              <a>
                <li>新店舗情報</li>
              </a>
            </Link>
            <Link href={"/company/#Nakashima"} passHref>
              <a>
                <li>倉敷中島店</li>
              </a>
            </Link>
            <Link href={"/company/#Corporation"} passHref>
              <a>
                <li>運営会社</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/sitepolicy"} passHref>
              <a>
                <li>Webサイトの利用条件</li>
              </a>
            </Link>
            <Link href={"/privacypolicy"} passHref>
              <a>
                <li>プライバシーポリシー</li>
              </a>
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
