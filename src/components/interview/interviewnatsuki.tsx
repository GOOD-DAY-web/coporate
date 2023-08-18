//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          natsukiさんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewnatuki.jpg"}
              alt={"磯村さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会3年】(*2023年8月現在)のnatsukiさん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の専門学校卒業後、スタイリスト歴5年。
              <br />
              <br />
              顔まわりの後毛カットや垢抜けカラーが得意。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki01.jpg"}
                alt={"natsukiさんインタビュー画像01"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              お客さまのことを1番に考えたかったからです！
              <br />
              <br />
              やはり勤めていると、自分のこだわりを貫けなかったりしますし、
              <br />
              <br />
              お客さまにもっとこうしたい！と思っても、なかなか実現できない環境に対して、モヤモヤしていました。
              <br />
              <br />
              そうした葛藤を抱えたまま仕事をし続けるより、フリーランスになって
              <br />
              <br />
              お客さまに対して何ができるかを最優先に考え、柔軟に対応したいなという思いがあったので、私はフリーランスを選びました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki02.jpg"}
                alt={"natsukiさんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              理想の働き方ができることがGOOD-DAYを選んだ1番の理由です。
              <br />
              <br />
              GOOD-DAYには個室があり、マンツーマンで対応できることが魅力的でした。
              <br />
              <br />
              そして、無駄な時間をなくして、効率よく働きたいなと思っていたので、
              <br />
              <br />
              働きたい時に働けて、休みたい時に休めるGOOD-DAYは自分に合っているなと働いていても感じています。
              <br />
              <br />
              従業員と違う事として、手当がなくなりますがストレスが少ない環境の方が
              <br />
              <br />
              私には重要だったので、GOOD-DAYで働くことを選びました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki03.jpg"}
                alt={"natsukiさんインタビュー画像03"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来てよかったこと</h2>
            <div className={styles.featuresDescription}>
              たくさんあります！
              <br />
              <br />
              店舗全体の雰囲気が良く働きやすいのはもちろんのこと、
              <br />
              <br />
              「感謝しやすい環境」だなということを強く感じています。
              <br />
              <br />
              というのも、GOOD-DAYのスタイリストは全員フリーランスのため、
              <br />
              <br />
              店内の掃除やタオルの準備などができていない場合でも、
              <br />
              <br />
              「なんでしてないの？」ではなく「私がして当たり前」と思っていますし、
              <br />
              <br />
              手伝ってくれたりした時は「してもらって申し訳ない、ありがとうございます」と思うようになりました。
              <br />
              <br />
              不満を溜め込むことより感謝することがとても増えたことを体感しています！
              <br />
              <br />
              <br />
              <br />
              また、カラー剤などを自分で選べることも楽しいです！
              <br />
              <br />
              同じカラー剤を使い続けるとマンネリ化してしまいがちですが、
              <br />
              <br />
              新しい話題の薬剤など使ってみたいと思えばすぐに使えるのも働きやすさを感じるポイントです！
              <br />
              <br />
              カラー剤やその他の技術などに関しても、GOOD-DAYの美容師に教えてもらったり、SNSで情報収集したりと
              <br />
              <br />
              学ぶことが以前より楽しくなりました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki04.jpg"}
                alt={"natsukiさんインタビュー画像04"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>入会から2年経ち思うこと</h2>
            <div className={styles.featuresDescription}>
              自分をマンネリ化させない仕組みを作ることが大切だなと気づきました。
              <br />
              <br />
              勤めているときはキャンペーンやサービスを定期的に打ち出してくれていましたが、
              <br />
              <br />
              フリーランスだとそういった集客面も自分で考えて、自分もお客さまも
              <br />
              <br />
              マンネリ化しないような工夫をすることが重要だと感じています！
              <br />
              <br />
              また、自由だからこそ自分でメリハリをつけることも大切だと思います。
              <br />
              <br />
              最初の方はそのメリハリをつけることが難しかったですが、定休日を自分の中で決めることで
              <br />
              <br />
              だいぶメリハリをつけれるようになりました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki05.jpg"}
                alt={"natsukiさんインタビュー画像05"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              GOOD-DAYの環境や、フリーランスという働き方に慣れてきたこともあり、最近は
              <br />
              <br />
              「こうしたい、ああしたい」という目標がさらに出てくるようになりました。
              <br />
              <br />
              フリーランスで働くことで、勤めている時には無かった視野が広がってきた感覚です。
              <br />
              <br />
              そのため、ぼんやりとではありますが自分だけのこだわりを詰めたお店を出したいなとも思い始めています。
              <br />
              <br />
              この目標を実現させるためにもまずは色彩検定に挑戦したり
              <br />
              <br />
              ヘッドスパのクオリティを上げるなどして、付加価値をつけていきたいな思っています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewnatuki06.jpg"}
                alt={"natsukiさんインタビュー画像06"}
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
              GOOD-DAY入会前は、仕事が終わってゲッソリしていることが当たり前で
              <br />
              <br />
              「美容師ってこんなに大変なんだ…」と思うことが多々ありました。
              <br />
              <br />
              でも、GOOD-DAYで働き始めてからは、仕事が終わって体力的に疲れたなと思うことは
              <br />
              <br />
              あっても、ゲッソリすることはなくなりました。
              <br />
              <br />
              それはGOOD-DAYが仕事を楽しめる環境だからだと思います。
              <br />
              <br />
              指示されるだけなのと、自分で考えて進んでいくのは楽しさが違うなと体感しています。
              <br />
              <br />
              もし一歩踏み出したいという方はぜひ一度サロン見学に来てみて欲しいです！
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
