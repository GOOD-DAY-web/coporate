import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Shops.module.scss";

export default function ShimonakanoShopInfo() {
  return (
    <>
      <div id="Nakashima" className={styles.main}>
        <h2 className={styles.menuTitle}>岡山下中野店(予定)</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>
                GOOD-DAY 岡山下中野店(予定)
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Tel</th>
              <td className={styles.menuTableTd}>
                <div className={styles.next}>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>未定</span>
                  </div>
                </div>
                {/* <div className={styles.next}>
                  <Link href={"tel:086-454-"} passHref>
                    <div className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>Phone Call</span>
                    </div>
                  </Link>
                </div> */}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>住所</th>
              <td className={styles.menuTableTd}>
                ※情報解禁まで今しばらくお待ちください
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
                ※以下の支払方法を予定
                <br />
                <br />
                VISA/MasterCard/JCB/AmericanExpress/Diners/Discover/PayPay/楽天ペイ/auPAY/d払い/メルペイ
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カット価格</th>
              <td className={styles.menuTableTd}>未定</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>席数</th>
              <td className={styles.menuTableTd}>未定</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>スタイリスト</th>
              <td className={styles.menuTableTd}>
                ※募集中
                <br />
                <br />
                詳しくは
                <span>
                  <Link href={"/recruit"} passHref>
                    こちら
                  </Link>
                </span>
                から、岡山下中野店の項目をご確認ください。
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>駐車場</th>
              <td className={styles.menuTableTd}>未定</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>こだわり</th>
              <td className={styles.menuTableTd}>
                ※以下のこだわり条件を予定
                <br />
                <br />
                駐車場あり/夜19時以降も受付OK/一人のスタイリストが仕上げまで担当/年中無休/朝10時前でも受付OK/カード支払いOK/完全予約制/個室あり/お子さま同伴可/禁煙
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>備考</th>
              <td className={styles.menuTableTd}>
                グッディでは、現在一緒に働く仲間を募集中です。独立を検討中の方、ブランクのある方、自由に働きたい方などライフスタイルに関わるお悩みは尽きないと思います。GOOD-DAYではより柔軟に働くことができますので、是非サロン見学にお越しください。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
