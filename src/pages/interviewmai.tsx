import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewmai from "../components/interview/interviewmai";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト今石麻依さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会1年半】(*2023年5月現在)の今石麻依さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,業務委託,働き方,フリーランス,インタビュー"
        }
        image={"/media/iinterviewmai00.jpg"}
        url={""}
      />
      <Interviewmai />
    </>
  );
};

export default Service;
