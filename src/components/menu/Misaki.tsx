import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Misaki() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>高校生以下</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪カット</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルカラー</th>
            <td className={styles.menuTableTd}>全体カラーのメニュー。</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチカラー</th>
            <td className={styles.menuTableTd}>
              根元のみのリタッチカラーメニュー。根元3cm 以内となります。
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(6枚)</th>
            <td className={styles.menuTableTd}>立体カラーにオススメ♪</td>
            <td className={styles.menuTableTd}>¥3,300〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(12枚)</th>
            <td className={styles.menuTableTd}>
              枚数やデザインはご相談ください。
            </td>
            <td className={styles.menuTableTd}>¥5,500〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(24枚)</th>
            <td className={styles.menuTableTd}>
              枚数やデザインはご相談ください。
            </td>
            <td className={styles.menuTableTd}>¥9,900〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>デザインカラー</th>
            <td className={styles.menuTableTd}>
              インナーカラーやイヤリングカラーなど♪
            </td>
            <td className={styles.menuTableTd}>¥5,500〜</td>
            <td className={styles.menuTableTd}>＋90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルブリーチ</th>
            <td className={styles.menuTableTd}>
              全体ブリーチ1 回分の料金です。
            </td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正ストレートパーマ</th>
            <td className={styles.menuTableTd}>
              くせ毛やボリュームをおさえて艶髪に♪ナチュラルな仕上がりも可能です！
            </td>
            <td className={styles.menuTableTd}>¥16,500〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>酸性ストレート(髪質改善)</th>
            <td className={styles.menuTableTd}>
              矯正ストレートよりも柔らかい手触りで自然なストレートヘアに♪ダメージ抑えたい方やダメージ毛の方にもオススメです。
            </td>
            <td className={styles.menuTableTd}>¥19,800〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪ストレート</th>
            <td className={styles.menuTableTd}>前髪のみ</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪ストレート</th>
            <td className={styles.menuTableTd}>顔まわり</td>
            <td className={styles.menuTableTd}>¥7,700〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ落とし(アイロン無し)</th>
            <td className={styles.menuTableTd}>
              パーマ落とし。くせ毛、くせが強いパーマはのびません。
            </td>
            <td className={styles.menuTableTd}>¥4,400〜￥6,600</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>キューティクルトリートメント</th>
            <td className={styles.menuTableTd}>
              保湿もできてツヤ髪に♪他のメニューと一緒にお選び下さい。
            </td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸SPA</th>
            <td className={styles.menuTableTd}>
              炭酸シャンプーで頭皮の汚れを落とします。
            </td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>5分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>15分ヘッドSPA</th>
            <td className={styles.menuTableTd}>
              炭酸シャンプーを使って汚れを落とし、スパクリームを使って頭皮と髪の保湿も。
            </td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>25分ヘッドSPA</th>
            <td className={styles.menuTableTd}>
              炭酸シャンプーを使って汚れを落とし、スパクリームを使って頭皮と髪の保湿も。
            </td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>45分ヘッドSPA</th>
            <td className={styles.menuTableTd}>
              炭酸シャンプーを使って汚れを落とし、スパクリームを使って頭皮と髪の保湿も。
            </td>
            <td className={styles.menuTableTd}>¥7,150</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘアセット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>セットアップ</th>
            <td className={styles.menuTableTd}>
              アップスタイル、お呼ばれアレンジなど。
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフアップ</th>
            <td className={styles.menuTableTd}>
              ハーフアップ、簡単アレンジなど。
            </td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>着付け</h2>
      <p className={styles.menuDetail}>
        着付けメニューはお電話にてお問い合わせください。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>訪問着、留袖</th>
            <td className={styles.menuTableTd}></td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>振袖</th>
            <td className={styles.menuTableTd}></td>
            <td className={styles.menuTableTd}>¥16,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>袴</th>
            <td className={styles.menuTableTd}></td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプー・ブロー</th>
            <td className={styles.menuTableTd}>
              カットなしの場合こちらを選択下さい。
            </td>
            <td className={styles.menuTableTd}>¥2,200〜</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}></td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>早朝料金</th>
            <td className={styles.menuTableTd}>
              9時より早い場合は早朝料金として30 分550 円頂戴します。
            </td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.kuchikomi}>
        <div className={styles.kuchikomiImage}>
          <Link href="https://g.page/r/CW8s23RofMNVEAI/review" passHref>
            <Image
              src={"/media/kuchikomi_01.png"}
              alt={"口コミのご協力をお願いします。"}
              objectFit="contain"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
