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
              自由度が高いことが、フリーランスという働き方を選んだ1番の理由です！
              <br />
              <br />
              業務委託なども考えましたが、フリーランスの方がメニューや時間、接客スタイルなどいろんな自由度が高いことが魅力的でした。
              <br />
              <br />
              元々独立に挑戦したかったこともあり、自分のお店を持った時と同じ感覚で働けることが想像できたので、
              <br />
              <br />
              「今しかない！」と思ってフリーランスという働き方に挑戦しました。
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
              私は、一人一人のお客様を最初から最後まで、1人で担当したいと思っていたのですが、
              <br />
              <br />
              勤めているとなかなかその接客スタイルが実現できないことがストレスでした。
              <br />
              <br />
              でも、GOOD-DAYだとお出迎えからお見送りまで全てを1人で担当することができるので
              <br />
              <br />
              理想の接客スタイルで仕事ができることに加えて、低リスクで開業を想定した“独立”ができることも私にはピッタリだと思いました。
              <br />
              <br />
              また、各ブース個室になっているので、お客様の満足度が高まるなと思ったのも、GOOD-DAYを選んだ理由です！
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
              情報収集や、接客など全て自分で行うことで成長を感じることができ、充実しているので、挑戦してみて良かったなと思っています！
              <br />
              <br />
              勤めていたときは、与えられることが多く、そこに甘えていましたが、「より良い接客を」と常に考え、
              <br />
              <br />
              学び続けることで日々成長をダイレクトに感じています。
              <br />
              <br />
              責任がある分、お客様に寄り添う接客ができるようにもなりました。
              <br />
              <br />
              そして、何よりも働きやすいです！(笑)
              <br />
              <br />
              上下関係や後輩の育成、周りのスタイリストへの気遣いなどに悩むことがなくなったので働きやすいですね。
              <br />
              <br />
              全ブース個室というところも働きやすいポイントです。
              <br />
              <br />
              周りの目が気にならないのでお客様がリラックスできるのはもちろんのこと、私自身、接客により一層集中できています！
              <br />
              <br />
              お客様からは「個室の空間だから落ち着く、リラックスできる」というお声もいただいています！
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
              集客の不安がある方が大半だと思いますが、今はSNSなどの媒体での発信力が集客には欠かせないと思います。
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
              軸があるかないかで見せ方も変わってくるので、きちんと準備段階から決めておくことが大事だと思いますね！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              売り上げをまだまだあげたいなと思っています。
              <br />
              <br />
              毎月の売り上げ目標や単価の目標などの数字を見える化して自己管理もしっかり行っていきたいです！
              <br />
              <br />
              そして、将来的にはお店を持ちたいと思っていて、そのお店はマンツーマン接客の個室サロンにしたいので、
              <br />
              <br />
              今はGOOD-DAYで働きながらマンツーマン接客の腕もあげていきたいです！
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
              挑戦しないともったいないと思います。
              <br />
              <br />
              今までの経験や知識もあると思いますし、自分の技術や知識に自信があればお客様も来てくださいます。
              <br />
              <br />
              不安になる気持ちもわかりますが、新しいことに挑戦する時は
              <br />
              <br />
              「どうにかなる」というポジティブな気持ちで思い切ることも大切だと思いますね。
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
