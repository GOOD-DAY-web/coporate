import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewono from "../components/interview/interviewono";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト小野奈美さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会1年半】(*2023年6月現在)の小野奈美さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,主婦美容師,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewfujiwara00.jpg"}
        url={""}
      />
      <Interviewono />
    </>
  );
};

export default Service;
