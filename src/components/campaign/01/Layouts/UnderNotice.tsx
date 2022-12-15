import Link from "next/link";
import Image from "next/image";
import styles from "../../../../styles/Layouts/UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.notice}>
        <div className={styles.flexA}>
          <div className={styles.box}>
            <Link href={"/campaign"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_00}>&nbsp;</li>
                  <li className={styles.innerMain_01}>&nbsp;</li>
                  <li className={styles.innerMain_02}>Home</li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/campaign"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_03}>&nbsp;</li>
                  <li className={styles.innerMain_04}>&nbsp;</li>
                  <li className={styles.innerMain_05}>Stylist</li>
                  <li
                    className={`${styles.innerMain_05_01} ${styles.korokoro}`}
                  >
                    &nbsp;
                  </li>
                </ul>
              </button>
            </Link>
          </div>

          <div className={styles.box}>
            <Link href={"/campaign"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_06}>&nbsp;</li>
                  <li className={styles.innerMain_07}>&nbsp;</li>
                  <li className={styles.innerMain_08}>Recruit</li>
                  <li className={`${styles.innerMain_08_01} ${styles.poyon}`}>
                    岡山野田店
                  </li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/campaign"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_09}>&nbsp;</li>
                  <li className={styles.innerMain_10}>&nbsp;</li>
                  <li className={styles.innerMain_11}>Company</li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link
              href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            >
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_12}>&nbsp;</li>
                  <li className={styles.innerMain_13}>&nbsp;</li>
                  <li className={styles.innerMain_14}>Reserve</li>
                </ul>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
