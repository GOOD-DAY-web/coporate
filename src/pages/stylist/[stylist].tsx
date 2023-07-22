// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import { client } from "../../libs/client";
import SEO from "../../components/layouts/SEO";
import type { Stylist } from "../../types/stylist";
import styles from "../../styles/Stylist/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";
import { LikeButton } from "../../components/layouts/LikeButton";

// 各スタイリストのSNSを読み込む(暫定適用)
import KatayamaSNS from "../../components/sns/KatayamaSNS";
import MikaSNS from "../../components/sns/MikaSNS";
import NozomiSNS from "../../components/sns/NozomiSNS";
import NatsukiSNS from "../../components/sns/NatsukiSNS";
import DaiSNS from "../../components/sns/DaiSNS";
import JohnSNS from "../../components/sns/JohnSNS";
import IkemotoSNS from "../../components/sns/IkemotoSNS";
import MaiSNS from "../../components/sns/MaiSNS";
import YukaSNS from "../../components/sns/YukaSNS";
import MahoSNS from "../../components/sns/MahoSNS";
import NamiSNS from "../../components/sns/NamiSNS";
import TomoyaSNS from "../../components/sns/TomoyaSNS";
import KahoSNS from "../../components/sns/KahoSNS";
import YukiSNS from "../../components/sns/YukiSNS";
import EriSNS from "../../components/sns/EriSNS";
import MisakiSNS from "../../components/sns/MisakiSNS";
import SakiSNS from "../../components/sns/SakiSNS";

// 各スタイリストのMenuを読み込む(暫定適用)
import Katayama from "../../components/menu/Katayama";
import Mika from "../../components/menu/Mika";
import Nozomi from "../../components/menu/Nozomi";
import Natsuki from "../../components/menu/Natsuki";
import Dai from "../../components/menu/Dai";
import John from "../../components/menu/John";
import Ikemoto from "../../components/menu/Ikemoto";
import Mai from "../../components/menu/Mai";
import Yuka from "../../components/menu/Yuka";
import Maho from "../../components/menu/Maho";
import Nami from "../../components/menu/Nami";
import Tomoya from "../../components/menu/Tomoya";
import Kaho from "../../components/menu/Kaho";
import Yuki from "../../components/menu/Yuki";
import Eri from "../../components/menu/Eri";
import Misaki from "../../components/menu/Misaki";
import Saki from "../../components/menu/Saki";

// 各スタイリストのPaginationを読み込む(暫定適用)
import KatayamaPagination from "../../components/pagination/KatayamaPagination";
import MikaPagination from "../../components/pagination/MikaPagination";
import NozomiPagination from "../../components/pagination/NozomiPagination";
import NatsukiPagination from "../../components/pagination/NatsukiPagination";
import DaiPagination from "../../components/pagination/DaiPagination";
import JohnPagination from "../../components/pagination/JohnPagination";
import IkemotoPagination from "../../components/pagination/IkemotoPagination";
import MaiPagination from "../../components/pagination/MaiPagination";
import YukaPagination from "../../components/pagination/YukaPagination";
import MahoPagination from "../../components/pagination/MahoPagination";
import NamiPagination from "../../components/pagination/NamiPagination";
import TomoyaPagination from "../../components/pagination/TomoyaPagination";
import KahoPagination from "../../components/pagination/KahoPagination";
import YukiPagination from "../../components/pagination/YukiPagination";
import EriPagination from "../../components/pagination/EriPagination";
import MisakiPagination from "../../components/pagination/MisakiPagination";
import SakiPagination from "../../components/pagination/SakiPagination";
import { StylistPagination } from "../../components/pagination/StylistPagination";

type Props = {
  stylist: Stylist;
  totalCount: number;
};

export default function Stylist({ stylist, totalCount }: Props) {
  const stylistIds: number[] = [stylist.stylist_id];
  return (
    <>
      <SEO
        title={stylist.title + " | " + stylist.subTitle}
        description={stylist.description}
        keyword={stylist.keyword}
        image={stylist.eye_catch.url}
        url={`/stylist/${stylist.id}`}
      />
      <HamburgerMenu />
      <div className={styles.detailArea}>
        <Link href={"/stylist"} passHref>
          <h2 className={styles.detailMainTitle}>Stylist</h2>
        </Link>
        <div className={styles.detailFlex}>
          <div className={styles.detailImage}>
            <Image
              className={styles.detailMainImage}
              src={stylist.eye_catch.url}
              alt={stylist.title + "の画像です"}
              width={1000}
              height={720}
              objectFit="contain"
            />
          </div>
          <div className={styles.detailRight}>
            <div>
              <Link href={stylist.url} passHref>
                <div className={styles.detailSubTitle}>{stylist.title}</div>
              </Link>
              {/* ここでstylistIdを認識して、各自のSNSメニューを表示する */}
              <div>
                {stylistIds.map((id) => {
                  return (
                    <div key={id}>
                      {id == 1 && <KatayamaSNS />}
                      {id == 2 && <MikaSNS />}
                      {id == 3 && <NozomiSNS />}
                      {id == 4 && <NatsukiSNS />}
                      {id == 5 && <DaiSNS />}
                      {id == 6 && <JohnSNS />}
                      {id == 7 && <IkemotoSNS />}
                      {id == 8 && <MaiSNS />}
                      {id == 9 && <YukaSNS />}
                      {id == 10 && <MahoSNS />}
                      {id == 11 && <NamiSNS />}
                      {id == 12 && <TomoyaSNS />}
                      {id == 13 && <KahoSNS />}
                      {id == 14 && <YukiSNS />}
                      {id == 15 && <EriSNS />}
                      {id == 16 && <MisakiSNS />}
                      {id == 17 && <SakiSNS />}
                    </div>
                  );
                })}
              </div>
              <div className={styles.tag}>
                {stylist.tag && (
                  <div className={styles.detailTag}>
                    <div className="">#{stylist.tag}</div>
                  </div>
                )}
              </div>
              <div>
                {/* Prevent HTML tags from being output */}
                <div
                  className={styles.detailProfile}
                  dangerouslySetInnerHTML={{
                    __html: `${stylist.profile}`,
                  }}
                />
              </div>
              <div className={styles.next}>
                <Link href={stylist.url} passHref>
                  <div className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>Web予約する</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailBody}>
          {/* Prevent HTML tags from being output */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${stylist.body}`,
            }}
          />
        </div>
        {/* ここで各自のstyleを表示 */}
        <h2 className={styles.detailMainTitle}>Hair Style</h2>
        <div className={styles.detailStyle}>
          <div className={styles.detailStyleSingle}>
            <Image
              className={styles.detailStyleImage}
              src={stylist.style1.url}
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={1000}
              objectFit="contain"
            />
            {/* <LikeButton /> */}
          </div>
          <div>
            <Image
              className={styles.detailStyleImage}
              src={stylist.style2.url}
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={1000}
              objectFit="contain"
            />
            {/* <LikeButton /> */}
          </div>
          <div>
            <Image
              className={styles.detailStyleImage}
              src={stylist.style3.url}
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={1000}
              objectFit="contain"
            />
            {/* <LikeButton /> */}
          </div>
        </div>
        {/* ここでstylistIdを認識して、各自のメニューを表示します。 */}
        <div>
          {stylistIds.map((id) => {
            return (
              <div key={id}>
                {id == 1 && <Katayama />}
                {id == 2 && <Mika />}
                {id == 3 && <Nozomi />}
                {id == 4 && <Natsuki />}
                {id == 5 && <Dai />}
                {id == 6 && <John />}
                {id == 7 && <Ikemoto />}
                {id == 8 && <Mai />}
                {id == 9 && <Yuka />}
                {id == 10 && <Maho />}
                {id == 11 && <Nami />}
                {id == 12 && <Tomoya />}
                {id == 13 && <Kaho />}
                {id == 14 && <Yuki />}
                {id == 15 && <Eri />}
                {id == 16 && <Misaki />}
                {id == 17 && <Saki />}
              </div>
            );
          })}
        </div>
        <p className={styles.menuDetail}>
          ※所要時間につきましては、当日の予約状況により変動する可能性もございます。
        </p>
        <p className={styles.menuDetail}>
          ※上記メニュー意外にもキャンペーン価格やセットメニューがございます。詳しい内容はスタイリストまでご連絡ください。
        </p>
        <div className={styles.next}>
          <Link href={stylist.url} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Web予約する</span>
            </div>
          </Link>
        </div>
        {/* ここでstylistIdを認識して、各自のページネーションを表示(暫定適用) */}
        {/* <StylistPagination currentPageNumber={1} maxPageNumber={Math.ceil(totalCount / 4)}/> */}
        <div>
          {stylistIds.map((id) => {
            return (
              <div key={id}>
                {id == 1 && <KatayamaPagination />}
                {id == 2 && <MikaPagination />}
                {id == 3 && <NozomiPagination />}
                {id == 4 && <NatsukiPagination />}
                {id == 5 && <DaiPagination />}
                {id == 6 && <JohnPagination />}
                {id == 7 && <IkemotoPagination />}
                {id == 8 && <MaiPagination />}
                {id == 9 && <YukaPagination />}
                {id == 10 && <MahoPagination />}
                {id == 11 && <NamiPagination />}
                {id == 12 && <TomoyaPagination />}
                {id == 13 && <KahoPagination />}
                {id == 14 && <YukiPagination />}
                {id == 15 && <EriPagination />}
                {id == 16 && <MisakiPagination />}
                {id == 17 && <SakiPagination />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const offset = 0;
  const limit = 4;
  const queries = { offset: offset, limit: limit };
  const stylistNum = ctx.params?.stylist;
  const idExceptArray =
    stylistNum instanceof Array ? stylistNum[0] : stylistNum;
  const data = await client.get({
    endpoint: "stylists",
    queries: queries,
    contentId: idExceptArray,
  });

  return {
    props: {
      stylist: data,
      totalCount: data,
    },
  };
};
