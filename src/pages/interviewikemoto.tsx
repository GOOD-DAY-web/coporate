import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewikemoto from "../components/interview/interviewiikemoto";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト池本麻紀子さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年8月現在)の池本麻紀子さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,フリーランス美容師,面貸し,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewikwmoto000.jpg"}
        url={""}
      />
      <Interviewikemoto />
    </>
  );
};

export default Service;
