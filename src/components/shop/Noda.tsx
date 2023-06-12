import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Shops.module.scss";

export default function NodaShopInfo() {
  return (
    <>
      <div id="Nakashima" className={styles.main}>
        {/* <Image
          className={styles.shopImage}
          src={"/media/noda.jpg"}
          alt={"こだわり1"}
          width={240}
          height={240}
        /> */}
        <h2 className={styles.menuTitle}>岡山野田店</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>GOOD-DAY 岡山野田店</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Tel</th>
              <td className={styles.menuTableTd}>
                <div className={styles.next}>
                  <Link href={"tel:086-230-7177"} passHref>
                    <div className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>Phone Call</span>
                    </div>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>住所</th>
              <td className={styles.menuTableTd}>
                〒700-0971 岡山県岡山市北区野田5丁目7-3
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>営業時間</th>
              <td className={styles.menuTableTd}>09:00〜24:00</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>定休日</th>
              <td className={styles.menuTableTd}>不定休</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>支払方法</th>
              <td className={styles.menuTableTd}>
                VISA/MasterCard/JCB/AmericanExpress/Diners/Discover/PayPay/楽天ペイ/auPAY/d払い/メルペイ(準備中)
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カット価格</th>
              <td className={styles.menuTableTd}>¥4,950〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>席数</th>
              <td className={styles.menuTableTd}>5席</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>スタイリスト</th>
              <td className={styles.menuTableTd}>2名</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>駐車場</th>
              <td className={styles.menuTableTd}>7台</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>こだわり</th>
              <td className={styles.menuTableTd}>
                駐車場あり/夜19時以降も受付OK/一人のスタイリストが仕上げまで担当/年中無休/ヘアセット/完全予約制/全室個室/お子さま同伴可/禁煙
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>備考</th>
              <td className={styles.menuTableTd}>
                グッディでは、スムーズなご案内とお待たせしない接客を実現するために完全予約&amp;指名制としています。ご予約&amp;ご質問については、店舗またはスタイリストまで直接ご確認ください。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
