//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

function Features() {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          今石麻依さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmai00.jpg"}
              alt={"maiさんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の今石麻依さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山県内のサロンにて10年間勤務。
              <br />
              <br />
              サロンワークだけでなく、作品撮りも積極的に行っている。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              1番は自由度の高さですね！
              <br />
              <br />
              業務委託も考えましたが、フリーランスの方がメニューや時間、接客スタイルなどいろんな自由度が高いことが魅力的でした。
              <br />
              <br />
              元々独立に挑戦したい気持ちはあったので、将来自分のお店を出すときには、この経験ってすごく役に立つと思ったんです！
              <br />
              <br />
              だったら「今しかない！」と思ってフリーランスという働き方に挑戦しました。
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmai01.jpg"}
              alt={"maiさんインタビュー画像01"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              私は、一人一人のお客さまを最初から最後まで、1人で担当したいと思っていたのですが、
              <br />
              <br />
              勤めているとなかなかそうはいかない現実がありました。
              <br />
              <br />
              でも、GOOD-DAYだと私の理想とする接客ができるんです！
              <br />
              <br />
              実際、お客さまに喜んでいただけていることが何より嬉しいですね。
              <br />
              <br />
              それに、低リスクで開業を想定した“独立”ができることも私にはピッタリだと思いました。
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmai02.jpg"}
              alt={"maiさんインタビュー画像02"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              接客だけでなく、技術・商品・トレンドなどの情報収集や経営について学ぶことで
              <br />
              <br />
              日々成長をダイレクトに感じられるので、とても充実しています！
              <br />
              <br />
              責任がある分、お客さまに寄り添う接客ができるようにもなりました。
              <br />
              <br />
              そして、何よりも働きやすいです！(笑)
              <br />
              <br />
              全ブース個室なので、お客さまにリラックスしていただけますし、私自身、接客により一層集中できています！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmai03.jpg"}
              alt={"maiさんインタビュー画像03"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランスになる前にやっておけば良かったなと思うこと
            </h2>
            <div className={styles.featuresDescription}>
              軸を決めることですね！
              <br />
              <br />
              何より集客への不安は大きいと思います。今はSNSなどの媒体での発信力が集客には欠かせないので、
              <br />
              <br />
              その発信内容がブレないことはとても大切だと感じています。
              <br />
              <br />
              だからこそ、自分がどういう美容師になりたいかという軸を決め、ターゲット層を明確にすることは
              <br />
              <br />
              フリーランスになる前から決めていた方がいいと思います。
              <br />
              <br />
              軸があるかないかで見せ方も変わってくるので、きちんと準備しておくことが大事だと思いますね！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              自分の可能性に挑戦したいですね。
              <br />
              <br />
              まずは、売り上げをまだまだあげたいと思っています。
              <br />
              <br />
              毎月の売り上げ目標や単価の目標などの数字を見える化して自己管理と分析と分析もしっかり行っていきたいです！
              <br />
              <br />
              そして、将来的にはマンツーマン接客の個室サロンを開業したいと思っています。
              <br />
              <br />
              だから今はGOOD-DAYで働きながらスキルや知識、接客の腕も磨いていきたいです！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmai04.jpg"}
              alt={"maiさんインタビュー画像04"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              現状に満足できていない、モヤモヤしているなら、まず動いてみるということが大事だと思います。
              <br />
              <br />
              もし失敗しても、美容師という仕事ができなくなるわけではないので、少しでも「やってみたい」という気持ちがあるなら
              <br />
              <br />
              挑戦しないともったいないですよ！
              <br />
              <br />
              今までの経験や知識もあると思いますし、自分の技術や知識に自信があればお客さまは来てくださいます。
              <br />
              <br />
              新しいことに挑戦する時はポジティブな気持ちで思い切ることも大切だと思いますね。
              <br />
              <br />
              新しい仲間が増えることを楽しみにしています！
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
}

export default Features;
