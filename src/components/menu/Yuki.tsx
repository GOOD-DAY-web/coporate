import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Yuki() {
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
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>スクールカット</th>
            <td className={styles.menuTableTd}>
              (高校生以下対象。シャンプー・ブロー込み)
            </td>
            <td className={styles.menuTableTd}>¥4,455</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フロントカット</th>
            <td className={styles.menuTableTd}>
              (前髪・顔まわりのカット、シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>オーガニックリタッチカラー</th>
            <td className={styles.menuTableTd}>根元のみのカラーです</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>オーガニックフルカラー</th>
            <td className={styles.menuTableTd}>全体のカラーです</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>N.カラー</th>
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
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>
              髪の内側に差し色を入れるカラーです
            </td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルブリーチ</th>
            <td className={styles.menuTableTd}>
              髪全体をブリーチで脱色し、透明感を出しやすい髪のベースをつくります
            </td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(5枚)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(15枚)</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト</th>
            <td className={styles.menuTableTd}>(30枚)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(ポイント)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(ハーフ)</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>その他デザインカラー</th>
            <td className={styles.menuTableTd}>(フル)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>150分</td>
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
            <td className={styles.menuTableTd}>
              通常のパーマです。＋特殊パーマ(波巻・ツイスト・スパイラル)は対象外
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>特殊パーマ</th>
            <td className={styles.menuTableTd}>波巻•ツイスト•スパイラル</td>
            <td className={styles.menuTableTd}>+¥2,200</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody> */}
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>チューニング</th>
            <td className={styles.menuTableTd}>
              髪のうねりや広がりを抑えます。※カラーと同時施術可
            </td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>
              癖毛を半永久的にストレートにします
            </td>
            <td className={styles.menuTableTd}>¥17,820</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody> */}
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ストレートパーマ</th>
            <td className={styles.menuTableTd}>
              1度かけたパーマをストレートに戻します
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>クイックトリートメント</th>
            <td className={styles.menuTableTd}>2Step</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              ユーラシアトリートメント【ホームケア付き】30分
            </th>
            <td className={styles.menuTableTd}>
              ダメージ+エイジング+くせ毛の3つをケアを可能に。髪の内部で補修成分×保湿成分が密着！週2回のホームケアトリートメント付。
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
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
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(15分)</td>
            <td className={styles.menuTableTd}>¥1,540</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(25分)</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(35分)</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(45分)</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>炭酸ヘッドスパ</th>
            <td className={styles.menuTableTd}>(55分)</td>
            <td className={styles.menuTableTd}>¥7,150</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        {/* <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>アップスタイル</th>
            <td className={styles.menuTableTd}>ヘアセットメニューです。</td>
            <td className={styles.menuTableTd}>¥5,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody> */}
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプー・ブローのみ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              シャンプー・ブロー(カットなし)
            </th>
            <td className={styles.menuTableTd}>
              カットをしない場合の選択メニュー
            </td>
            <td className={styles.menuTableTd}>¥1,980</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>眉カット</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>複合メニュー</h2>
      <p className={styles.menuDetail}>特にご要望の多い複数メニューです。</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + オーガニックフルカラー
            </th>
            <td className={styles.menuTableTd}>
              天然由来成分配合のオーガニックカラー剤使用で頭皮・髪へのダメージ軽減。
            </td>
            <td className={styles.menuTableTd}>¥13,750</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + N. フルカラー</th>
            <td className={styles.menuTableTd}>
              シアバター配合のN.カラー剤使用で高発色、色持ち、保湿効果◎頭皮・髪へのダメージや刺激臭も軽減。
            </td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              メンズカット + 眉カット + 炭酸スパ(5分)
            </th>
            <td className={styles.menuTableTd}>
              頭皮のベタつきを無くし爽快感たっぷりの炭酸スパ。カットと眉カットのセットメニューでよりカッコよく仕上げます。
            </td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋炭酸スパ(15分)</th>
            <td className={styles.menuTableTd}>
              人気の炭酸スパセットで頭皮のベタつきを無くし毛穴汚れも除去。髪がふんわり立ち上がり艶のある仕上がりに。
            </td>
            <td className={styles.menuTableTd}>¥6,490</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              カット + オーガニックリタッチカラー
            </th>
            <td className={styles.menuTableTd}>
              カットと根元のみのカラーセットです。オーガニックカラー剤使用で頭皮、髪にやさしくカラーしていきます。
            </td>
            <td className={styles.menuTableTd}>¥11,550</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              カット + オーガニックフルカラー ＋ イヤリングカラー
            </th>
            <td className={styles.menuTableTd}>
              耳周りに差し色を入れて可愛くオシャレに♪※イヤリングカラーはブリーチ→オンカラーの2回分料金込みです。
            </td>
            <td className={styles.menuTableTd}>¥18,150</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
      </table>

      {/* <h2 className={styles.menuTitle}>店販商品</h2>
      <p className={styles.menuDetail}>
        ※在庫がない場合には取り寄せになる場合がございます。予めご了承ください。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>N.セラム</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥3,740</td>
            <td className={styles.menuTableTd}>&nbsp;</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>N.バーム</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>&nbsp;</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>N.ポリッシュオイル</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥3,540</td>
            <td className={styles.menuTableTd}>&nbsp;</td>
          </tr>
        </tbody>
      </table> */}

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
