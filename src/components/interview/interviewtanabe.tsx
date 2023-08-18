//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          田邊大将さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewtanabe.jpg"}
              alt={"田邊さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会3年】(*2023年8月現在)の田邊大将さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の専門学校卒業後、倉敷市内にてスタイリスト歴7年。
              <br />
              <br />
              2年連続全国大会出場、SPCカット中国大会3位等受賞歴多数。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewtanabe01.jpg"}
                alt={"田邊さんインタビュー画像01"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              独立に向けて準備をしたいと思ったことがGOOD-DAYを選んだ1番の理由です。
              <br />
              <br />
              雇われているままだと、やりがいを感じづらかったこともあり、給料制ではなく出来高性が良いなと思い始めていました。
              <br />
              <br />
              そんな時にGOOD-DAYというシェアサロンが倉敷にできたので入会することを決めました。
              <br />
              <br />
              GOODーDAYで働き始めてからはやりがいを感じながら日々美容師業に向き合うことができています。
              <br />
              <br />
              また、フリーランス美容師として働くことに慣れ、技術力も上がり、視野が広がったことで、
              <br />
              <br />
              独立に向けての道が明確に見えてきたことを実感しています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewtanabe02.jpg"}
                alt={"田邊さんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              1番は手取りが増えたことですね！
              <br />
              <br />
              勤めていた時の2倍弱位になりました。
              <br />
              <br />
              僕は戦略的にメンズカットに集中したことで、去年の12月あたりから売り上げが伸びていきました。
              <br />
              <br />
              自分で考えてすぐに実践できること、その効果をすぐに体感できることがいいなと思います。
              <br />
              <br />
              また、無駄な時間がなく、自由に時間を使えているのが良いなと思いました。
              <br />
              <br />
              予約の間の空き時間に帰れたり、どこかに出れる自由があるので効率的な働き方ができているなと感じています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewtanabe03.jpg"}
                alt={"田邊さんインタビュー画像03"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師として働いて感じていること
            </h2>
            <div className={styles.featuresDescription}>
              最初の方は休むタイミングが分からず人と予定を合わせる時に少し困るなと感じていました。
              <br />
              <br />
              お客さまを優先する時と自分の予定を優先する時の線引きに慣れるまでは大変でしたね。
              <br />
              <br />
              でも慣れてきて予定調整をうまくできるようになった今では、そこまで困っていないです！
              <br />
              <br />
              売り上げ目標を自分で立てて達成できた時にはやりがいを感じ、自信に繋がりましたし、
              <br />
              <br />
              僕は指示されるのが苦手なので、自分で考えながら進めていけるGOOD-DAYの環境、働き方は自分に合っているなと感じています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewtanabe04.jpg"}
                alt={"田邊さんインタビュー画像04"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標【独立について】</h2>
            <div className={styles.featuresDescription}>
              現在独立に向けて店舗探しなどを進めているところです。
              <br />
              <br />
              元々独立のための準備としてGOOD-DAYへの入会を決めたこともあり、「独立」は入会当初から目標にしていました。
              <br />
              <br />
              アシスタントと共に今よりさらに効率よく働き、得意なカットの技術力も
              <br />
              <br />
              より磨きをかけていけるような店舗作りをしていきたいと思っています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewtanabe05.jpg"}
                alt={"田邊さんインタビュー画像05"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              雇われていて不満が多い方はフリーランスに挑戦してみても良いのでは？と思います。
              <br />
              <br />
              実際にフリーランスになってみて思うのは、雇われているときのメリットがすごく少ないということです。
              <br />
              <br />
              僕は時間とお金の自由度が格段に上がりましたし、
              <br />
              <br />
              やりがいも雇われている時より感じながら働けているので充実しています。
              <br />
              <br />
              また、初心でお客様に接することができるのもフリーランスになるメリットだと思います。
              <br />
              <br />
              マンツーマンで接客したお客さまからお金を直接いただくことで、
              <br />
              <br />
              お客さまの喜びや責任感など全てがお金に変わっているなという感覚になります。
              <br />
              <br />
              初心にかえることができ、やりがいを感じながら日々美容師を楽しんでいます。
              <br />
              <br />
              挑戦してみたいと思っている方は、ぜひ挑戦してみることをおすすめします！
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
