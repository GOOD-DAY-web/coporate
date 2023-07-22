import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Saki() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込み</td>
            <td className={styles.menuTableTd}>¥4,730</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>スクールCUT</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込み〜小学生のお子様に〜中高生は+880円</td>
            <td className={styles.menuTableTd}>¥2,970〜</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>キッズCUT</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別〜未就学児のお子様に〜</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪CUT</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>COLOR</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ(2cm以内)</th>
            <td className={styles.menuTableTd}>単品メニュー。カットなしの場合はシャンプーブローを選択してください。</td>
            <td className={styles.menuTableTd}>¥5,000</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ(2cm以上)</th>
            <td className={styles.menuTableTd}>単品メニュー。カットなしの場合はシャンプーブローを選択してください。</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルカラー</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。
              ロング料金有(M+220円、L+770円)
            </td>
            <td className={styles.menuTableTd}>¥6,380</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト</th>
            <td className={styles.menuTableTd}>枚数により料金が変わります。
            リタッチorフルカラーもされる方はカラーメニューも選択してください。</td>
            <td className={styles.menuTableTd}>¥1,650〜</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>Wカラー</th>
            <td className={styles.menuTableTd}>
              カラー2回分の料金。カットなしの場合はシャンプーブローを選択してください。ロング料金有(M+550円、L+1650円)
            </td>
            <td className={styles.menuTableTd}>¥11,000〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>PERM</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。ツイストスパイラルなどのハードパーマは別途料金
              かかります。
            </td>
            <td className={styles.menuTableTd}>¥6,600〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。
              ロング料金有り(M+1100円,L+2200円)
            </td>
            <td className={styles.menuTableTd}>¥14,300〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ポイント矯正</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。
            </td>
            <td className={styles.menuTableTd}>¥3,850〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>クイック</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。
            </td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>フル</th>
            <td className={styles.menuTableTd}>
              単品メニュー。カットなしの場合はシャンプーブローを選択してください。
            </td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>クイック</th>
            <td className={styles.menuTableTd}>
              簡単トリートメント。施術後の繊細な髪を優しく保護。ホームケアなし。
              カットなしの場合はシャンプーブローを選択してください。
            </td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>10分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ミルボン</th>
            <td className={styles.menuTableTd}>
              髪質やお悩みにあわせって数種類から選べます。1ヶ月分のホームケア付き。
              カットなしの場合はシャンプーブローを選択してください。
            </td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプー・ブロー(カラーなどの単品時)</th>
            <td className={styles.menuTableTd}>単品メニューの時は必ずこちらも選択してください。前髪カットは含まれています。</td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプーブローセット</th>
            <td className={styles.menuTableTd}>シャンプーのみの場合のメニューです。</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ヘアセット</th>
            <td className={styles.menuTableTd}>アップスタイル、ハーフアップなど華やかなスタイルに</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>複合メニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋リタッチカラー</th>
            <td className={styles.menuTableTd}>
              リタッチ2cm以内。2cm以上の場合は+550円
            </td>
            <td className={styles.menuTableTd}>¥9,730</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋フルカラー</th>
            <td className={styles.menuTableTd}>ロング料金有り(M+220円,L+770円)</td>
            <td className={styles.menuTableTd}>¥11,000〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋【MILBON】トリートメント</th>
            <td className={styles.menuTableTd}>
              髪質やお悩みにあわせて選べるトリートメント。1ヶ月分のホームケア付き
            </td>
            <td className={styles.menuTableTd}>¥8,030</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋パーマ</th>
            <td className={styles.menuTableTd}>
              ゆるふわスタイルからしっかりウェーブまで◎毎朝のセットが楽になります！
              ロング料金(L+550円〜)
            </td>
            <td className={styles.menuTableTd}>¥11,330〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット＋ヘッドスパ</th>
            <td className={styles.menuTableTd}>
              癒しのリラックスタイムをお過ごしください。毛穴の汚れもすっきり！
            </td>
            <td className={styles.menuTableTd}>¥7,480</td>
            <td className={styles.menuTableTd}>90分</td>
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
