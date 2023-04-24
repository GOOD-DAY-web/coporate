import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";
import { scaleRotate as Menu } from "react-burger-menu";

const HamburgerMenu: React.FC = () => {
  let isMenuOpen = (state: any) => {
    return state.isOpen;
  };
  return (
    <>
      <Menu
        customBurgerIcon={
          <div className={styles.openButton}>
            <span className={styles.line_00}></span>
            <span className={styles.line_01}></span>
            <span className={styles.line_02}></span>
          </div>
        }
        customCrossIcon={
          <div>
            <span className={styles.closeButton}></span>
          </div>
          // <Image
          //   src="/media/gear_04.png"
          //   alt=""
          //   height={100}
          //   width={100}
          //   objectFit={"contain"}
          // />
        }
        burgerButtonClassName={styles.burgerButton}
        burgerBarClassName={styles.burgerBars}
        crossButtonClassName={styles.crossButton}
        crossClassName={styles.cross}
        menuClassName={styles.burgerMenu}
        morphShapeClassName={styles.morphShape}
        itemListClassName={styles.itemList}
        overlayClassName={styles.overlay}
        onStateChange={isMenuOpen}
        pageWrapId={"page-wrap"}
        width={"70%"}
      >
        <div id="page-wrap">
          <ul className={styles.items}>
            <li className={styles.itemsBrock}>
              <Link href="/" passHref>
                <p className={styles.itemsTitle}>Home</p>
                <p className={styles.itemsSubTitle}>ホーム</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/stylist" passHref>
                <p className={styles.itemsTitle}>Stylist</p>
                <p className={styles.itemsSubTitle}>スタイリスト一覧</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/interview" passHref>
                <p className={styles.itemsTitle}>Interview</p>
                <p className={styles.itemsSubTitle}>インタビュー記事</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/service" passHref>
                <p className={styles.itemsTitle}>Service</p>
                <p className={styles.itemsSubTitle}>サービス</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/recruit" passHref>
                <p className={styles.itemsTitle}>Recruit</p>
                <p className={styles.itemsSubTitle}>求人・応募</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/company" passHref>
                <p className={styles.itemsTitle}>Company</p>
                <p className={styles.itemsSubTitle}>運営会社</p>
              </Link>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
