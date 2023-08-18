import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewnatsuki from "../components/interview/interviewnatsuki";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリストnatsukiさんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年7月現在)のnatsukiさん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,業務委託,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewnatuki.jpg"}
        url={""}
      />
      <Interviewnatsuki />
    </>
  );
};

export default Service;
