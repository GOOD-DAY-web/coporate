import SEO from "../components/layouts/SEO";
import Interview from "../components/interview/interview";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリストインタビュー|岡山県の個室シェアサロン"}
        description={
          "岡山県にあるシェアサロンGOOD-DAY(グッディ)。フリーランスで働くスタイリストへのインタビュー記事です。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,サービス,フリーランス,インタビュー"
        }
        image={"/media/Customer_03.png"}
        url={""}
      />
      <Interview />
    </>
  );
};

export default Service;
