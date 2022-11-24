// これはTopPageを表示している
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import type { Stylist } from "../types/stylist";
import styles from "../styles/Stylist/NewStylist.module.scss";

type Props = {
  stylists: Array<Stylist>;
};

export default function Stylist({ stylists }: Props) {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリスト一覧|岡山県の個室シェアサロン"}
        description={
          "Beauty Hair Salon GOOD-DAY(グッディ)では、美容師の仕事が大好きでたまらないスタイリストが在籍しています。それぞれ違う魅力を持ったあなただけのお気に入りの美容師に出会えますように。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,スタイリスト,スタイリスト一覧"
        }
        image={"/media/GOOD-DAY_stylists.jpg"}
        url={""}
      />
      <div className={styles.mainHome}>
        <div className={styles.stylistArea}>
          <h2 className={styles.stylistMainTitle}>Stylist</h2>
          <div className={styles.stylistMainTitleText}>スタイリスト一覧</div>
          <div className={styles.stylistColumn}>
            {stylists.map((stylist) => (
              <div className={styles.container} key={stylist.id}>
                <Link
                  href={`/stylist/${stylist.id}`}
                  className={styles.card}
                  passHref
                >
                  <div className={`${styles.touch} ${styles.touch__1}`}></div>
                  <div className={`${styles.touch} ${styles.touch__2}`}></div>
                  <div className={`${styles.touch} ${styles.touch__3}`}></div>
                  <div className={`${styles.touch} ${styles.touch__4}`}></div>
                  <div className={`${styles.touch} ${styles.touch__5}`}></div>
                  <div className={`${styles.touch} ${styles.touch__6}`}></div>
                  <div className={`${styles.touch} ${styles.touch__7}`}></div>
                  <div className={`${styles.touch} ${styles.touch__8}`}></div>
                  <div className={styles.main}>
                    <div className={styles.icon}>
                      <Image
                        className={styles.img}
                        src={stylist.eye_catch.url}
                        alt={stylist.title + "の画像です"}
                        width={500}
                        height={500}
                      />
                    </div>
                    <span className={styles.name}>
                      <Link href={`/stylist/${stylist.id}`} passHref>
                        {stylist.title}
                      </Link>
                    </span>
                    <span className={styles.account}>
                      725 Follow / 15,210 Followers
                    </span>
                    <span className={`${styles.like} ${styles.text}`}>
                      {stylist.tag && <span className="">#{stylist.tag}</span>}
                    </span>
                    <span className={`${styles.comment} ${styles.text}`}>
                      <Link href={stylist.url} passHref>
                        web予約する
                      </Link>
                    </span>
                  </div>
                </Link>
                <div className={`${styles.circle} ${styles.circle__1}`}></div>
                <div className={`${styles.circle} ${styles.circle__2}`}></div>
                <div className={`${styles.circle} ${styles.circle__3}`}></div>
                <div className={`${styles.circle} ${styles.circle__4}`}></div>
                <div className={`${styles.circle} ${styles.circle__5}`}></div>
                <div className={`${styles.circle} ${styles.circle__6}`}></div>
                <div className={`${styles.circle} ${styles.circle__7}`}></div>
                <div className={`${styles.circle} ${styles.circle__8}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "stylists",
    queries: { limit: 20, offset: 0 },
  });

  return {
    props: {
      stylists: data.contents,
    },
  };
};
