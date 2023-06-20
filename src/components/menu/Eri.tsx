import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Eri() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>
        ＋¥550でシャンプーを炭酸シャンプーに変更できます。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>(シャンプー・ブロー込み)</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生カット</th>
            <td className={styles.menuTableTd}></td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>キッズカット</th>
            <td className={styles.menuTableTd}>(小学生以下・シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,970</td>
            <td className={styles.menuTableTd}>40分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ファミリーカット</th>
            <td className={styles.menuTableTd}>(カット＋キッズカット)</td>
            <td className={styles.menuTableTd}>¥7,150</td>
            <td className={styles.menuTableTd}>100分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪カット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>
        カットなしの場合シャンプー・ブロー代¥2,200別途いただきます。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>全体カラー</th>
            <td className={styles.menuTableTd}>
              肩上全体カラー・シャンプーブロー別・長さによりプラス料金あり
            </td>
            <td className={styles.menuTableTd}>¥6,600〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>根元カラー</th>
            <td className={styles.menuTableTd}>
              根元カラー・シャンプーブロー別・3cm以上の方には全体カラーをお勧めします
            </td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ホイルワーク</th>
            <td className={styles.menuTableTd}>
              ハイライト・白髪ぼかし・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥3,300〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>再来根元カラー</th>
            <td className={styles.menuTableTd}>
              当店でカラー施術1ヶ月以内の方限定根元カラー・シャンプードライ込み
            </td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>
        カットなしの場合シャンプー・ブロー代¥2,200別途いただきます
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ</th>
            <td className={styles.menuTableTd}>
              全体パーマ・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪パーマ</th>
            <td className={styles.menuTableTd}>
              前髪のパーマ・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハーフパーマ</th>
            <td className={styles.menuTableTd}>
              トップのみのパーマ・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>
        カットなしの場合シャンプー・ブロー代¥2,200別途いただきます
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>
              電話予約orお問い合わせください
            </td>
            <td className={styles.menuTableTd}>¥15,400〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントストレート</th>
            <td className={styles.menuTableTd}>
              前髪だけ、顔周りのみなどの部分ストレート・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥4,400〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <p className={styles.menuDetail}>
        カットなしの場合シャンプー・ブロー代¥2,200別途いただきます
        <br />
        その他トリートメントメニューもご相談ください
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>クイックトリートメント</th>
            <td className={styles.menuTableTd}>
              2Stepのコーティングトリートメント・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <p className={styles.menuDetail}>
        カットなしの場合シャンプー・ブロー代¥2,200別途いただきます
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックスパ</th>
            <td className={styles.menuTableTd}>
              10分間ヘッドマッサージ・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クレンジングヘッドスパ</th>
            <td className={styles.menuTableTd}>
              15分間ヘッドマッサージ・頭皮クレンジング付き・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘアセット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>セット</th>
            <td className={styles.menuTableTd}>アップスタイル</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>45分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>セット</th>
            <td className={styles.menuTableTd}>ダウンスタイル</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>髪質改善チューニング</th>
            <td className={styles.menuTableTd}>
              クセを整えて扱いやすい髪質に・シャンプーブロー別
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブロー</th>
            <td className={styles.menuTableTd}>単品メニューの場合</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブロー</th>
            <td className={styles.menuTableTd}>他のメニューとプラスの場合</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>20分</td>
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
