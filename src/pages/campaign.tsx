import React from "react";
import SEO from "../components/layouts/SEO";
import CustomerReferral from "../components/campaign/01/CustomerReferral";

export default function Campaign() {
  return (
    <>
      <SEO
        title={
          "GOOD-DAY(グッディ)お客様ご紹介キャンペーン | 岡山県の個室シェアサロン"
        }
        description={
          "岡山県にあるBeauty Hair Salon GOOD-DAY(グッディ)では、株式会社ワイケイとのコラボレーションキャンペーンを実施中です。ワイケイからGOOD-DAYへ。GOOD-DAYからワイケイヘ。2つのお店をいつもより更にお得に利用できるキャンペーンです。是非、この機会にご利用ください。"
        }
        keyword={
          "岡山県, 岡山市, 倉敷市, 美容室, シェアサロン, ヘアサロン, GOOD-DAY, グッディ, ワイケイ, お客様ご紹介キャンペーン"
        }
        image={""}
        url={""}
      />
      <CustomerReferral />
    </>
  );
}
