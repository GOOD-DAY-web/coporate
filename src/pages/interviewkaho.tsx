import React from "react";
import SEO from "../components/layouts/SEO";
import Interviewkaho from "../components/interview/interviewkaho";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリストkahoさんインタビュー記事|岡山県の個室シェアサロン"}
        description={
          "今回ご紹介する美容師は、【GOOD-DAY入会1ヶ月】(*2023年4月現在)のkahoさん。なぜ会社員ではなくフリーランス美容師として働く決断をしたのか。その想いに迫ります。"
        }
        keyword={
          "岡山県,岡山市,美容室,シェアサロン,GOOD-DAY,グッディ,フリーランス,フリーランス美容師,スタイリストインタビュー,働き方改革"
        }
        image={"/media/kahointerview00.jpg"}
        url={""}
      />
      <Interviewkaho />
    </>
  );
};

export default Service;
