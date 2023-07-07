//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

function Features() {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          土田真帆さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmaho00.jpg"}
              alt={"mahoさんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の土田真帆さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山県内のサロンにて13年間勤務。
              <br />
              <br />
              ３年前からフリーランスとして働いており、1年半前にGOOD-DAYに入会。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              お客さまにお出迎えからお見送りまで一対一の接客をしたいという想いが強くありました。
              <br />
              <br />
              それに、同じフリーランスという立場の美容師の方と関わることで私自身得られるものがあるんじゃないかなと思ったので、挑戦することにしました。
              <br />
              <br />
              私は専門学校を卒業して以来、13年間同じサロンに勤めていたのですが、歴が長くなるにつれて求められることも変わっていきました。
              <br />
              <br />
              「1人でお店を出したい」という夢があったこともあり、フリーランスに挑戦することに躊躇はあまりありませんでしたね！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmaho01.jpg"}
              alt={"mahoさんインタビュー画像01"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              13年間勤めたサロンを辞めた後、業務委託でフリーランスとして働いていたのですが、
              <br />
              <br />
              お客さまにもっと喜んでいただくためには？と考えた時に、より自由度が高く、
              <br />
              <br />
              私の将来の夢であるプライベートサロンと似た働き方ができると感じたのでGOOD-DAYを選びました。
              <br />
              <br />
              あとは、サロン見学の申し込みをする時、「GOOD-DAY」という店名から、直感的に「悪い人はいない気がする！」と思ったことも覚えています(笑)
              <br />
              <br />
              結果、その通りだったので良かったです！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>サロン見学に来た時の印象</h2>
            <div className={styles.featuresDescription}>
              第一印象は、「お店が綺麗！！！」です(笑)
              <br />
              <br />
              全ブース個室になっていることに驚きました！
              <br />
              <br />
              倉敷でこんなに設備が整っているサロンはなかなか無いと思うので、お客さまにリラックスしていただける姿や、
              <br />
              <br />
              私の理想の接客である、「お客さまにしっかり向き合う接客」ができることがすぐに想像できました。
              <br />
              <br />
              また、スタイリストの方も運営の方も挨拶が気持ちよく、親切な人ばかりだなとも感じました！
              <br />
              <br />
              {/* やはり、いくらお店の設備が充実していても、集まる人によって働きやすさ、居心地のよさが変わると思うのですが、
              <br />
              <br />
              その心配はしなくていいと安心したことも覚えています！ */}
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmaho02.jpg"}
              alt={"mahoさんインタビュー画像02"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              周りのスタイリストともいい関係を築きながらお客さまともしっかり向き合えるようになり、
              <br />
              <br />
              楽しく働けていることが良かったと思うポイントですね！
              <br />
              <br />
              GOOD-DAYでは、勤務スケジュールや売上目標、メニューなどスタイリストが全て決めることができるので、
              <br />
              <br />
              勤めている時と比べて心と時間の余裕を持てています。
              <br />
              <br />
              そのため、自分や家族を省みる時間ができて、プライベートも仕事もより楽しむことができています！
              <br />
              <br />
              独立して自分のお店を持ったら、本来しないといけない運営や経理などの事務作業を運営スタッフの方が行ってくれるので
              <br />
              <br />
              お客さまへの接客や自分の働き方の確立により集中できるありがたい環境だと思っています。
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmaho03.jpg"}
              alt={"mahoさんインタビュー画像03"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              GOOD-DAY入会から1年半経ち感じること
            </h2>
            <div className={styles.featuresDescription}>
              フリーランスに挑戦する時はもちろん不安も大きかったです。
              <br />
              <br />
              最初の頃は予約が入らないことへの不安な気持ちもありましたが、
              <br />
              <br />
              新規のお客さまや紹介いただいたお客さまからの予約も増えていきました。
              <br />
              <br />
              今では、たくさんのお客さまとの出会いがあり、フリーランスとしての働き方が確立できたので、
              <br />
              <br />
              良い意味で力を抜きながら頑張ることができています！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              ワークライフバランスの両立が今の目標です。
              <br />
              <br />
              30代になってから、体調を崩すことも増えてきたので、
              <br />
              <br />
              長く続けていけるような仕事の向き合い方をしていきたいと思っています。
              <br />
              <br />
              フリーランスという働き方にも慣れてきて、視野も広がってきた今のタイミングで、
              <br />
              <br />
              将来お店を出す夢に向けてスタイリストとしての幅を広げつつ、プライベートも充実させることができる最適な力の入れ方を見つけたいです！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmaho04.jpg"}
              alt={"mahoさんインタビュー画像04"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              安心して挑戦して欲しいなと思います！
              <br />
              <br />
              実際働いていて、挑戦したい！やってみたい！などの想いに対してお店としてバックアップしてくれるので、
              <br />
              <br />
              「独立したい」と考えている美容師にとっては、「こんなにやってくれる環境はないよ！」とおすすめしたいです(笑)
              <br />
              <br />
              それに接客する各ブースにもタブレットや空気清浄機の設置なども行ってくださり、
              <br />
              <br />
              施術と接客にこんなに集中できて、自由に働ける環境はなかなか無いと思うので、
              <br />
              <br />
              まずはサロン見学から！1歩踏み出してみてほしいですね。
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
