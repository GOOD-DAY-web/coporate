import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../../../styles/Layouts/HamburgerMenu.module.scss";
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
              <Link href="/campaign" passHref>
                <p className={styles.itemsTitle}>Home</p>
                <p className={styles.itemsSubTitle}>ホーム</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/" passHref>
                <p className={styles.itemsTitle}>HomePage</p>
                <p className={styles.itemsSubTitle}>ホームページ</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="https://beauty.hotpepper.jp/slnH000524394/" passHref>
                <p className={styles.itemsTitle}>HPB倉敷中島店</p>
                <p className={styles.itemsSubTitle}>外部リンク</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="https://beauty.hotpepper.jp/slnH000616748/" passHref>
                <p className={styles.itemsTitle}>HPB岡山野田店</p>
                <p className={styles.itemsSubTitle}>外部リンク</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link
                href="/https://page.line.me/153jsnax?openQrModal=true"
                passHref
              >
                <p className={styles.itemsTitle}>Contact</p>
                <p className={styles.itemsSubTitle}>コンタクト</p>
              </Link>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
