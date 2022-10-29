import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Tomoya() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>
        カウンセリングもしっかり行い、お客様1人1人のライフスタイルに合った髪型をご提案いたします。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>シャンプー•ブロー込</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>スクールカット</th>
            <td className={styles.menuTableTd}>
              高校生以下、シャンプー•ブロー込
            </td>
            <td className={styles.menuTableTd}>¥4,455</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪カット</th>
            <td className={styles.menuTableTd}>シャンプー•ブロー別</td>
            <td className={styles.menuTableTd}>¥1,150</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチカラー</th>
            <td className={styles.menuTableTd}>根元のみのカラーです</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルカラー</th>
            <td className={styles.menuTableTd}>全体のカラーです</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>オーガニックカラー</th>
            <td className={styles.menuTableTd}>
              天然由来成分の肌•髪に優しいカラーです
            </td>
            <td className={styles.menuTableTd}>+¥1,100</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>イルミナカラー</th>
            <td className={styles.menuTableTd}>
              透明感、艶髪を表現できるカラーです
            </td>
            <td className={styles.menuTableTd}>+¥2,200</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>イヤリングカラー</th>
            <td className={styles.menuTableTd}>
              耳元にワンポイント差し色を入れるカラーです
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>
              髪の内側に差し色を入れるカラーです
            </td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルブリーチ</th>
            <td className={styles.menuTableTd}>
              髪全体をブリーチで脱色し、透明感を出しやすい髪のベースをつくります
            </td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(5枚)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(15枚)</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(30枚)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(ポイント)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(ハーフ)</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(フル)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>
        前処理剤にこだわり、髪への負担をなるべく少なく施術します。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ</th>
            <td className={styles.menuTableTd}>通常のパーマです</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>特殊パーマ</th>
            <td className={styles.menuTableTd}>波巻•ツイスト•スパイラル</td>
            <td className={styles.menuTableTd}>+¥2,200</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>チューニング</th>
            <td className={styles.menuTableTd}>
              髪のうねりや広がりを抑えます。※カラーと同時施術可
            </td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>
              癖毛を半永久的にストレートにします
            </td>
            <td className={styles.menuTableTd}>¥17,820</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ストレートパーマ</th>
            <td className={styles.menuTableTd}>
              1度かけたパーマをストレートに戻します
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックトリートメント</th>
            <td className={styles.menuTableTd}>2Step</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>Hita髪質改善トリートメント</th>
            <td className={styles.menuTableTd}>5Step</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <p className={styles.menuDetail}>
        お客様のご要望に合わせて細かく時間設定をしています。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(5分)</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(15分)</td>
            <td className={styles.menuTableTd}>¥1,540</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(25分)</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(35分)</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(45分)</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(55分)</td>
            <td className={styles.menuTableTd}>¥7,150</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>アップスタイル</th>
            <td className={styles.menuTableTd}>ヘアセットメニューです。</td>
            <td className={styles.menuTableTd}>¥5,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプー・ブロー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>複合メニュー</h2>
      <p className={styles.menuDetail}>特にご要望の多い複数メニューです。</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + オーガニックカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥13,750</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + イルミナカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + オーガニックリタッチカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥11,550</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + 髪質改善トリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥20,350〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + イヤリングカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥17,050〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + インナーダブルカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥19,250〜</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ダブルカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥21,450〜</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + ポイントハイライト
            </th>
            <td className={styles.menuTableTd}>(5枚)</td>
            <td className={styles.menuTableTd}>¥14,850〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + ハーフハイライト
            </th>
            <td className={styles.menuTableTd}>(15枚)</td>
            <td className={styles.menuTableTd}>¥17,050〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー フルハイライト
            </th>
            <td className={styles.menuTableTd}>(30枚)</td>
            <td className={styles.menuTableTd}>¥21,450〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + パーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥12,320</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 特殊パーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + チューニング</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 縮毛矯正</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥22,770</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ストレートパーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥12,650</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + 髪質改善トリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥11,550</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(5分)</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(15分)</td>
            <td className={styles.menuTableTd}>¥6,490</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(25分)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(35分)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(45分)</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(55分)</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
