//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>磯村希さんインタビュー記事</h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/isomura00.jpg"}
              alt={"磯村さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の磯村希さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山県内のサロンにて16年間勤務。
              <br />
              <br />
              ショートヘアが得意で、お客さまからの要望もショートスタイルが多い。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由」
            </h2>
            <div className={styles.featuresDescription}>
              新しいことをしたい！という想いがフリーランスという道を選んだ1番の動機です！
              <br />
              <br />
              会社員として16年間勤めていると、どうしてもマンネリ化してしまったなと感じることが多くなってきて、
              <br />
              <br />
              刺激が欲しいなと思うようになりました。会社員としての働き方は、安定していていいと思いますが、
              <br />
              <br />
              違う環境に行って新しいものに触れることで刺激を感じ、自分の成長につなげたいと思ったので、フリーランスに挑戦しました。
              <br />
              <br />
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/isomura01.jpg"}
              alt={"磯村さんインタビュー画像01"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              勤務時間、メニュー、扱う商材など全て自由に決められるので、私自身が求める働き方ができるようになりました。
              <br />
              <br />
              将来的に自分のお店を持ちたいので、いつも来てくださるお客さまに、
              <br />
              <br />
              より喜んでもらうために自由度高くメニューを決めていくことができるのはありがたいです。
              <br />
              <br />
              メニューに関しては、増やすだけでなく減らしてより専門性を高めていくという選択ができるこの環境は、
              <br />
              <br />
              「お客さまに対して何ができるか」「お客さまに喜んでもらうためには」という根本的で私が1番大切にしている部分を追求しやすく、
              <br />
              <br />
              働きやすさを感じるポイントです。
              <br />
              <br />
              休日の取り方もGOOD-DAYではもちろん自由なので、お客さまの予約を優先するときと、
              <br />
              <br />
              自分の予定を優先するときの判断など将来のための経験にもなっているなと感じます。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/isomura02.jpg"}
                alt={"磯村さんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師として働く上で大切にしていること
            </h2>
            <div className={styles.featuresDescription}>
              1番は、「お客さまに喜んでもらうこと」です！
              <br />
              <br />
              当たり前のことですが、「お客さまが不快に思うこと」をしないよう気をつけていて、
              <br />
              <br />
              特に目配り、気配り、口配りを大切にしています。
              <br />
              <br />
              また、トレンドスタイルなどの情報収集も行っています。フリーランスとして働くなら、
              <br />
              <br />
              与えられるのを待つのではなく、自発的な行動が必要なので、常にアンテナを張っています！
              <br />
              <br />
              また、売上分析や時間分析なども行うようにしています。
              <br />
              <br />
              会社員の時は、時間単価などあまり気にしていませんでしたが、フリーランスとなると、全部自己管理しないといけないので
              <br />
              <br />
              お金と時間に対しての意識もGOOD-DAYで働き始めて変わりました。
              <br />
              <br />
              この意識の変化が、将来自分のお店を持った時に必ず役に立つと思うので、
              <br />
              <br />
              独立する前にGOOD-DAYで働くことで、大切な経験を積めているなと感じています。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の将来像</h2>
            <div className={styles.featuresDescription}>
              自分のお店を開こうと思っています。
              <br />
              <br />
              10年以上来てくださっているお客さまもいらっしゃるので、関係性を大切にしていくためにも、
              <br />
              <br />
              マンツーマン対応のお店を開く予定です。
              <br />
              <br />
              GOOD-DAYで働き初めて、個人での働き方がある程度確立できたので、
              <br />
              <br />
              独立して自分のお店を持つという将来を会社員の時よりも明確に構想することができました。
              <br />
              <br />
              今では、より細かいところにもこだわって働きたいと感じるようになりました。
              <br />
              <br />
              これからは、お客さまのご要望にさらに寄り添うことと、自分の働き方をより追求していきたいです。
              <br />
              <br />
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/isomura03.jpg"}
              alt={"磯村さんインタビュー画像03"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              自分の位置を把握することは大切にしたほうがいいと思います。
              <br />
              <br />
              フリーランスを目指す上でも、フリーランスになってからも、自分の立ち位置をきちんと把握していないと、
              <br />
              <br />
              進む先がわからなくなったり、するべきことがわからなくなってしまう可能性もあります。
              <br />
              <br />
              会社員、フリーランスそれぞれにメリット・デメリットがあることを理解した上で、
              <br />
              <br />
              どちらかを選択するかを自分で決めることが、後悔しない将来につながると思います！
              <br />
              <br />
              そして、行動してみるということも大切だと思うので、迷っている方は
              <br />
              <br />
              まずサロン見学に来て話を聞いてみてから考えてもいいのではないのでしょうか？
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
