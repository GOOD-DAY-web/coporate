import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Stylists</h2>
        <p className={styles.mainSubTitle}>スタイリスト一覧</p>
      </div>
      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            <Link href={"/stylist/misaki"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/misaki_img.jpg"}
                  alt={"misaki"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>misaki</p>
                  <p className={styles.stylistCaptionSub}>岡山下中野店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/eri"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/asanuma_.jpg"}
                  alt={"eri"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>えり</p>
                  <p className={styles.stylistCaptionSub}>岡山野田店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/yuki"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Yuki_00.jpg"}
                  alt={"yuki"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>yuki</p>
                  <p className={styles.stylistCaptionSub}>岡山下中野店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/kaho"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Kaho_00.jpg"}
                  alt={"kaho"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>kaho</p>
                  <p className={styles.stylistCaptionSub}>岡山野田店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/tomoya"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Tomoya_01.jpg"}
                  alt={"tomoya"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>藤原 朋也</p>
                  <p className={styles.stylistCaptionSub}>岡山野田店</p>
                </div>
              </li>
            </Link>

            <Link href={"/stylist/nami"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Nami_01.jpg"}
                  alt={"Nami"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>小野 奈美</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/maho"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Maho_01.jpg"}
                  alt={"Maho"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>土田 真帆</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/yuka"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Yuka_01.jpg"}
                  alt={"Yuka"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>藤原 由香</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/mai"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Mai_01.jpg"}
                  alt={"Mai"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>今石 麻依</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/ikemoto"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Ikemoto_01.jpg"}
                  alt={"Ikemoto"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>池本 麻紀子</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            {/* <Link href={"/stylist/fujii"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Fujii_01.jpg"}
                  alt={"Fujii"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>藤井 政美</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link> */}
            <Link href={"/stylist/john"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/John_01.jpg"}
                  alt={"John"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>神田 敏和</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/dai"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Dai_03.jpg"}
                  alt={"Dai"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>田邉 大将</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/natsuki"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Natsuki_01.jpg"}
                  alt={"Natsuki"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>natsuki</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/nozomi"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Nozomi_01.jpg"}
                  alt={"Nozomi"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>磯村 希実</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/mika"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Mika_01.jpg"}
                  alt={"Mika"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>田原 美華</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
            <Link href={"/stylist/katayama"}>
              <li className={styles.stylistImage}>
                <Image
                  className={styles.stylistImageHover}
                  src={"/media/Katayama_01.jpg"}
                  alt={"Katayama"}
                  width={240}
                  height={240}
                />
                <div className={styles.stylistMask}>
                  <p className={styles.stylistCaption}>かたやま はるか</p>
                  <p className={styles.stylistCaptionSub}>倉敷中島店</p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staffs;
