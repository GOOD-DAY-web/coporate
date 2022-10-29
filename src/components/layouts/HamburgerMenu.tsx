import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <Image
              className={styles.navImage}
              src={"/media/GOOD-DAY_mainLogo_05.png"}
              alt="GOOD-DAY_MainLogo"
              width={56}
              height={56}
            />
          </Link>
        </div>
        <nav className={styles.navPC}>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/stylist" passHref>
                Stylist
              </Link>
            </li>
            <li>
              <Link href="/service" passHref>
                Service
              </Link>
            </li>
            <li>
              <Link href="/philosophy" passHref>
                Philosophy
              </Link>
            </li>
            <li>
              <Link href="/recruit" passHref>
                Recruit
              </Link>
            </li>
            <li>
              <Link href="/company" passHref>
                Company
              </Link>
            </li>
            <li className={styles.poyoyon}>
              <Link
                href="https://sam004.salonanswer.com/sas/reserve/goodday/staff"
                passHref
              >
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu}
        ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/stylist" passHref>
              <p className={styles.mainTitle}>Stylist</p>
              <p className={styles.subTitle}>スタイリスト</p>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <p className={styles.mainTitle}>Service</p>
              <p className={styles.subTitle}>サービス</p>
            </Link>
          </li>
          <li>
            <Link href="/philosophy" passHref>
              <p className={styles.mainTitle}>philosophy</p>
              <p className={styles.subTitle}>理念</p>
            </Link>
          </li>
          <li>
            <Link href="/recruit" passHref>
              <p className={styles.mainTitle}>Recruit</p>
              <p className={styles.subTitle}>リクルート</p>
            </Link>
          </li>
          <li>
            <Link href="/company" passHref>
              <p className={styles.mainTitle}>Company</p>
              <p className={styles.subTitle}>運営会社</p>
            </Link>
          </li>
          <div className={styles.poyoyon}>
            <li className={styles.drawerMenuLi2}>
              <Link
                href="https://sam004.salonanswer.com/sas/reserve/goodday/staff"
                passHref
              >
                <p className={styles.mainTitle}>Reservation</p>
                <p className={styles.subTitle}>予約する</p>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
