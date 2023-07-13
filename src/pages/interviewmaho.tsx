import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewmaho from "../components/interview/interviewmaho";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト土田真帆さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年7月現在)の土田真帆さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,業務委託,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewmaho00.jpg"}
        url={""}
      />
      <Interviewmaho />
    </>
  );
};

export default Service;
