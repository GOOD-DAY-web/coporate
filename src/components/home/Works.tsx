import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../../components/layouts/Button";
import styles from "../../styles/Service/Service.module.scss";

const Works: React.FC = () => {
  return (
    <>
      <div id="Works" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYで働く</h2>
        <p className={styles.featuresMainSubTitle}>スタイリストさんへ</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_000.png"}
                alt={"グッディの特徴その1"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_01.png"}
                alt={"グッディの特徴その2"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_02.png"}
                alt={"グッディの特徴その3"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_03.png"}
                alt={"グッディの特徴その4"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_04.png"}
                alt={"グッディの特徴その5"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_05.png"}
                alt={"グッディの特徴その6"}
                objectFit="contain"
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <Link href={"/recruit"} passHref>
          <Button props={"募集条件を見る"} />
        </Link>
      </div>
    </>
  );
};

export default Works;
