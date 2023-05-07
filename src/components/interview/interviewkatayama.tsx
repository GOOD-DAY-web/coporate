//かたやまさんインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>kahoさんインタビュー記事</h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって1ヶ月、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/kahointerview00.jpg"}
              alt={"kahoさんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会1ヶ月】(*2023年4月現在)のkahoさん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、倉敷の美容室にて勤務。
              <br />
              <br />
              1店舗目で2年、2店舗目では4年勤め、高い売り上げでお店に貢献。
              <br />
              <br />
              2023年3月からフリーランス美容師としてGOOD-DAYで働き始める。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              元々、自分で考えてやり方を決めていけるフリーランスという働き方や独立に興味がありました。
              <br />
              <br />
              経営など、技術面以外のことを学んでみたかったのも理由の一つです。
              <br />
              <br />
              でも、一番大きな理由は「人間関係」と「お金」についてです。
              <br />
              <br />
              お客さまに集中したいのに、働く環境や人間関係に悩んでいる時間が無駄だと思っていました。
              <br />
              <br />
              いくら頑張っても、将来が描けない現状に対してモチベーションを保つことが難しくなっていくのを感じていました。
              <br />
              <br />
              そんな時にGOOD-DAYを知り、フリーランスという働き方に挑戦することを決めました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/kahointerview01.jpg"}
                alt={"kahoさんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスとして働き始めて大変だったことは？
            </h2>
            <div className={styles.featuresDescription}>
              自分で全て決めて行動に移していかないといけない働き方は、やはり大変です。
              <br />
              <br />
              特に扱う商材やメニューの設定にとても悩みました。
              <br />
              <br />
              カラー剤など今までは自分で用意しなかったものを全て揃えることも何から手をつけて良いか分からず、最初は大変でした。
              <br />
              <br />
              でも、そんな時に周りのスタイリストさんや運営スタッフに聞けるGOOD-DAYの環境はとてもありがたかったです。
              <br />
              <br />
              それに、ワゴンの貸与や、鏡、ドライヤーなどを含むスタートアップセットをいただけたことはとても助かりました。
              <br />
              <br />
              フリーランスって、全部1人でしないといけないと思っていましたが、
              <br />
              <br />
              GOOD-DAYはシェアサロンだから、周りの美容師がみんなフリーランスだからこそ、色々なことを教えてもらえる環境はとても心強いです！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              最初と比べて不安は減った？乗り越え方は？
            </h2>
            <div className={styles.featuresDescription}>
              もちろん今でも不安ですが、GOOD-DAYで働き始めたころの不安を10段階中”10”だとすると、1ヶ月経った今は、”7”になりました。
              <br />
              <br />
              今も不安ではありますが、想像以上にお客様が来てくださったり、倉敷市だけでなく岡山市のお客様も来てくださるようになり、色んなお客様と関われることが楽しいです。
              <br />
              <br />
              それに、自分の頑張りが結果となって返ってくるので自信につながっています。
              <br />
              <br />
              フリーランスの仲間がいることも、不安が少なくなった原因の一つです！！
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/kahointerview02.jpg"}
              alt={"kahoさんインタビュー画像03"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              GOOD-DAYでフリーランスという働き方に挑戦して本当によかったです！(笑)
              <br />
              <br />
              手取りは入会1か月で2倍近くになりましたし、何より人間関係の悩みも一切なくなりました！
              <br />
              <br />
              会社員の時から休みの日も働いて腕をあげたいと思っていたので、「頑張ったら頑張った分だけ結果がついてくる」今の環境はとても意欲が湧きます。
              <br />
              <br />
              失敗しても自分のせいだから挑戦しやすくなりました。手応えが常に見えるので成長を感じながら美容師という仕事を以前より楽しめています。
              <br />
              <br />
              フリーランスになって、プライベートと仕事を分けられるかな？と心配していましたが、会社員の時よりもプライベートを充実させることができています！
              <br />
              <br />
              好きな時に連休が取れるのも嬉しいです。今まで我慢していたライブや旅行に、これからはたくさんいこうと思います！
              <br />
              <br />
              働きたい時はたくさん働いて、休みたい時に休みを取るという働き方は自由で、日々充実しています！
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/kahointerview03.jpg"}
              alt={"kahoさんインタビュー画像03"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              独立してお店を持つのもいいなと思っていますが、今は安定的に月70万円以上の売り上げをあげることが目標です！
              <br />
              <br />
              また、得意なスタイルもどんどん増やしていきたいので流行を早く取り入れることができるように
              <br />
              <br />
              情報収集にも力を入れたいです！体調に気をつけながら頑張ります！
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/kahointerview04.jpg"}
              alt={"藤原さんインタビュー画像04"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              「失敗してもいいからやってみよう！」この気持ちが大切だと思います。
              <br />
              <br />
              やはり、挑戦する時は失敗したらどうしようと考えてしまうし、その気持ちもわかります。
              <br />
              <br />
              でも失敗を恐れずに挑戦してみて、私はよかったと思っています。
              <br />
              <br />
              「美容師を辞めたい」と思っている方や、「美容師という仕事は好きだけど、人間関係などその他のことで悩んでいる」という方は
              <br />
              <br />
              一度でいいからGOOD-DAYに来てみてください！
              <br />
              <br />
              もし不安でも、周りにフリーランス美容師として楽しく過ごしている仲間がたくさんいるので安心して欲しいです！
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
