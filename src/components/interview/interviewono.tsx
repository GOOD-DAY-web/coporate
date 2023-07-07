//かたやまさんインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>小野さんインタビュー記事</h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって3年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono00.jpg"}
              alt={"小野さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会1年半】(*2023年6月現在)の小野奈美さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、倉敷市内のサロンにて15年間勤務。
              <br />
              <br />
              店長としての勤務経験もある2児の母。
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono01.jpg"}
              alt={"小野インタビュー画像01"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              勤めていた時から、将来独立したいという思いが強かったこともあり、フリーランスという働き方を選びました。
              <br />
              <br />
              「年齢的にも独立するなら早く動きたい」、「早く一歩前進したい」
              <br />
              <br />
              という焦りに似たような思いが強かったかもしれません！
              <br />
              <br />
              そんな時、美容師の友達がGOOD-DAYで働いていることを知り、話を聞いているうちに、
              <br />
              <br />
              GOOD-DAYの自由な働き方なら、独立に向けてステップアップができると思い、挑戦することにしました。
              <br />
              <br />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              自由度が高く働きやすそうだという印象に加えて、立地もよく駐車場も広いので、お客さまが来店しやすそうと思えたからですね。
              <br />
              <br />
              フリーランスとして自由に働けるシェアサロン自体が岡山には少ないですし、
              <br />
              <br />
              そもそも倉敷にはなかったので、知った時は、どんなお店か気になって仕方なかったです！笑
              <br />
              <br />
              それに、全ブース個室ということにも驚きました。
              <br />
              <br />
              サロン見学に来た時も、個室だったらお客さまにリラックスしてもらえるし、
              <br />
              <br />
              私自身も接客しやすいだろうと感じていたのですが、実際働き初めてそれを実感しています。
              <br />
              <br />
              お客さまも、立地の良さや個室空間についてとても気に入ってくださってます。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono02.jpg"}
              alt={"小野さんインタビュー画像02"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              GOODーDAYに来て良かったこと
            </h2>
            <div className={styles.featuresDescription}>
              たくさんあります！笑
              <br />
              <br />
              手取りも増え、自由な時間を作りやすくなったことで、以前よりプライベートが充実していることですね！
              <br />
              <br />
              私はアウトドアが好きなんですが、GOOD-DAYでは、
              <br />
              <br />
              予約管理をしっかり行うことで家族との時間を増やすことができました。
              <br />
              <br />
              今までは難しかった、家族とのキャンプも行けるようになったので子供たちも喜んでくれています！
              <br />
              <br />
              独立したら自分で色々な情報を掴みに行かないといけませんが、GOOD-DAYは、
              <br />
              <br />
              いろんな店舗で働いていた経験のある人たちの集まりだから、情報共有ができるので刺激が多くて楽しいです。
              <br />
              <br />
              ネガティブな発言をする人がいると、モチベーションが下がってしまいますが、
              <br />
              <br />
              GOOD-DAYはフリーランスの集まりだからこそやる気のある人ばかりで、自分も「頑張ろう！」と良い影響を日々受けています！
              <br />
              <br />
              たまに今までのことを振り返ることがあるのですが、その度に「今が1番充実しているな」と感じるので、
              <br />
              <br />
              GOOD-DAYに来て本当に良かったなと改めて思います。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono03.jpg"}
              alt={"小野さんインタビュー画像03"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスになってからの家庭と仕事の両立について
            </h2>
            <div className={styles.featuresDescription}>
              家庭と仕事の両立は、勤めていた頃と比べるとできていると感じています！
              <br />
              <br />
              フリーランスになると「プライベートの確保が難しい」という印象を持つ方も多いかもしれませんが、実際働いてみると逆でしたね！(笑)
              <br />
              <br />
              GOOD-DAYの働き方だと、出勤中でも空いた時間に家に帰ってやるべきことや趣味に
              <br />
              <br />
              時間を使えるので充実度が上がりました。
              <br />
              <br />
              フリーランスになってから、家族との時間や自分自身のための時間により丁寧に向き合えるようになったと思います。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono04.jpg"}
              alt={"小野さんインタビュー画像04"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              私は、「時間とお金と気持ちに余裕のある暮らし」が自分の幸せの定義だと考えているので、
              <br />
              <br />
              身近にいる人を大切にして、時間、お金、気持ちのバランスを保ちながら、これからも美容師人生を充実させていきたいです。
              <br />
              <br />
              将来的には自宅兼美容室を建てたいと考えているので、初心を忘れず、
              <br />
              <br />
              今来てくれているお客さまを大事にしながら、GOOD
              -DAYで経営に関するノウハウも学びたいと思っています。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <Image
              className={styles.centerImage}
              src={"/media/interviweono05.jpg"}
              alt={"小野さんインタビュー画像05"}
              width={1080}
              height={800}
            />
            <div className={styles.featuresDescription}>
              やはり、一歩踏み出す時は不安だと思いますし、特に集客の面で言うと
              <br />
              <br />
              勤めているところのお客さまとの関わりは少なくなるかもしれません。
              <br />
              <br />
              そこに対して不安に感じる方は多いと思いますし、実際私も不安でしたが、
              <br />
              <br />
              お客さまの満足度はGOOD-DAYに来ることで確実に上がったと実感しています。
              <br />
              <br />
              GOOD-DAYでは、個室でマンツーマン接客ができるので、お客さまからも、
              <br />
              <br />
              「小野さんに最初から最後までしてもらえるなんて贅沢だわ〜」という言葉をいただくことがよくあります。
              <br />
              <br />
              挑戦するときは、失うものや大変さを考えがちですが、GOOD-DAYでは得るものとメリットの方が断然大きいです。
              <br />
              <br />
              自分で出店するよりは断然リスクも低いし、こういったありがたい環境はなかなかないと思うので、
              <br />
              <br />
              独立を考えている方は、一度サロン見学だけでも来てみてください！
              <br />
              <br />
              <div className={styles.matome}>
                <br />
                フリーランス美容師に興味がある方はぜひ一度サロン見学にてお話してみませんか？
                <br />
                <br />
                公式LINEよりお問い合わせください。
              </div>
            </div>
          </>
          <div className={styles.next}>
            <Link
              href={"https://page.line.me/153jsnax?openQrModal=true"}
              passHref
            >
              <div className={styles.nextInner}>
                <span className={styles.nextInnerIn}>公式LINE友達追加</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
