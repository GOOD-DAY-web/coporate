import SEO from "../components/layouts/SEO";
import Interview from "../components/interview/interview";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリストインタビュー記事一覧|岡山県の個室シェアサロン"}
        description={
          "岡山県にあるシェアサロンGOOD-DAY(グッディ)。フリーランスで働くスタイリストへのインタビュー記事一覧です。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,サービス,フリーランス,インタビュー"
        }
        image={"/media/tomoyainterview00.jpg"}
        url={""}
      />
      <Interview />
    </>
  );
};

export default Service;
