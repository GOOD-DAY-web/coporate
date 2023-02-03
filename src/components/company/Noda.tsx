import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Company/Company.module.scss";

export default function Noda() {
  return (
    <>
      <div id="Noda" className={styles.menu}>
        <h2 className={styles.menuTitle}>岡山野田店</h2>
        <div className={styles.shopImg}>
          <Image
            src={"/media/Noda_sliderimg_02.jpg"}
            alt={"commig soon !!"}
            objectFit="contain"
            width={2000}
            height={1250}
          />
        </div>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>GOOD-DAY 岡山野田店</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>会員募集</th>
              <td className={styles.menuTableTd}>応募受付中</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>応募方法</th>
              <td className={styles.menuTableTd}>
                <div className={styles.flex}>
                  <div className={styles.nemuVertical}>
                    公式LINEよりご連絡ください。
                  </div>
                  <Link href={"https://page.line.me/153jsnax?openQrModal=true"} passHref>
                    <p className={styles.line}></p>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Open日時</th>
              <td className={styles.menuTableTd}>2022年11月1日</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>所在地</th>
              <td className={styles.menuTableTd}>
                〒700-0971 岡山県岡山市北区野田5丁目7-3
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
