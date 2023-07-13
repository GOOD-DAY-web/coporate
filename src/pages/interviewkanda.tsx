import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewkanda from "../components/interview/interviewkanda";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト神田敏和さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年7月現在)の神田敏和さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山シェアサロン,倉敷シェアサロン,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,主婦美容師,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewkanda00.jpg"}
        url={""}
      />
      <Interviewkanda />
    </>
  );
};

export default Service;
