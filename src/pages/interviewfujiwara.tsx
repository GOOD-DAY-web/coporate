import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewfujiwara from "../components/interview/interviewfujiwara";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリスト藤原由香さんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の藤原由香さん。GOOD-DAYを選んだ理由、そしてフリーランスという働き方を選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,主婦美容師,働き方,フリーランス,インタビュー"
        }
        image={"/media/interviewfujiwara00.jpg"}
        url={""}
      />
      <Interviewfujiwara />
    </>
  );
};

export default Service;
