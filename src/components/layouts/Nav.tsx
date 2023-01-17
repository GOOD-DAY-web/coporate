import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Accordion from "./Accordion";
import styles from "../../styles/Layouts/Nav.module.scss";

export default function Nav(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  const data = props.list;
  console.log(data);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.mainNav}>
      <div className={styles.navImageArea}>
        <Link href={"/"}>
          <Image
            className={styles.navImage}
            src={"/"}
            alt="GOOD-DAY_MainLogo"
            width={64}
            height={64}
          />
        </Link>
      </div>
      <div className={styles.navRow}>
        <div className={styles.navRowCharacter}>
          <Link href={"/"} passHref>
            <div className={styles.navRowCharacterSingle}>Home</div>
          </Link>
          <Link href={"/stylist"} passHref>
            <div className={styles.navRowCharacterSingle}>Stylist</div>
          </Link>
          <Link href={"/service"} passHref>
            <div className={styles.navRowCharacterSingle}>service</div>
          </Link>
          <Link href={"/recruit"} passHref>
            <div className={styles.navRowCharacterSingle}>Recruit</div>
          </Link>
          <Link href={"/campany"} passHref>
            <div className={styles.navRowCharacterSingle}>Company</div>
          </Link>
        </div>
      </div>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerArea}>
          <button
            className={styles.hamburgerButton}
            onClick={menuFunction}
          ></button>
        </div>
      </div>
    </div>
  );
}
