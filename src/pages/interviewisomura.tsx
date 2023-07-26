import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewisomura from "../components/interview/interviewisomura";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト磯村希さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年7月現在)の磯村希さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,フリーランス美容師,面貸し,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewfujiwara00.jpg"}
        url={""}
      />
      <Interviewisomura />
    </>
  );
};

export default Service;
