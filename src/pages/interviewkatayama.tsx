import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewkatayama from "../components/interview/interviewkatayama";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={
          "GOOD-DAYスタイリストかたやまはるかさんインタビュー記事|岡山県の個室シェアサロン"
        }
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会3年】(*2023年4月現在)のかたやまはるかさん。GOOD-DAYを選んだ理由、そしてフリーランスという働きかたを選んだ理由に迫ります。"
        }
        keyword={
          "岡山県,倉敷市,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,美容師,働き方,フリーランス,インタビュー"
        }
        image={"/media/katayamainterview00.jpg"}
        url={""}
      />
      <Interviewkatayama />
    </>
  );
};

export default Service;
