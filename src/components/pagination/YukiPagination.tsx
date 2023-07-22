import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Pagination/Pagination.module.scss";

export default function KahoPagination() {
  return (
    <>
      <div className={styles.nextFlex}>
        <div className={styles.next}>
          <Link href={"kaho"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Back</span>
            </div>
          </Link>
        </div>
        <div className={styles.next}>
          <Link href={"eri"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Next</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
