import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewtomoya from "../components/interview/interviewtomoya";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリスト藤原朋也さんインタビュー記事|岡山県の個室シェアサロン"}
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会半年】(*2023年4月現在)の藤原朋也さん。なぜ大阪からお客様ゼロの岡山県でフリーランス美容師になったのか。その想いに迫ります。"
        }
        keyword={
          "岡山県,岡山市,岡山市野田,美容室,シェアサロン,GOOD-DAY,グッディ,個室美容室,フリーランス美容師,働き方改革,スタイリストインタビュー"
        }
        image={"/media/tomoyainterview00.jpg"}
        url={""}
      />
      <Interviewtomoya />
    </>
  );
};

export default Service;
