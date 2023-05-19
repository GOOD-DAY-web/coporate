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
              お客様にお出迎えからお見送りまで一対一の接客をしたいという想いが強くありました。
              <br />
              <br />
              それに、同じフリーランスという立場の美容師の方と関わることで私自身得られるものがあるんじゃないかなと思ったので、
              <br />
              <br />
              フリーランスという働き方に挑戦しました。
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
              業務委託でフリーランスをするよりも遥かに自由度が高く、
              <br />
              <br />
              私の夢であったお店を出した時に1番近い働き方ができると感じたのでGOOD-DAYを選びました。
              <br />
              <br />
              13年間勤めたサロンを辞めた後、業務委託でフリーランスとして働いていたのですが、
              <br />
              <br />
              お店の売り上げ目標や、出勤必須の日があったりと、縛りがあったので自由度が少なく、働きづらさを感じモヤモヤしていたんです。
              <br />
              <br />
              その点、GOOD-DAYだとそういった縛りもなく自由に楽しく働けることで、お客様により集中できています。
              <br />
              <br />
              あとは、サロン見学の申し込みをする時、「GOOD-DAY」という店名から、「悪い人はいない気がする！」と思ったことも覚えています(笑)
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
              倉敷にこんなに設備が整っているサロンはなかなか無いと思うので、お客様にリラックスしていただける姿や、
              <br />
              <br />
              私の理想の接客である、「お客様にしっかり向き合う接客」ができることがすぐに想像できました。
              <br />
              <br />
              また、スタイリストの方も運営の方も挨拶が気持ちよく、親切な人ばかりだなとも感じました！
              <br />
              <br />
              やはり、いくらお店の設備がしっかりしていても、集まる人によって働きやすさ、居心地のよさが変わると思うのですが、
              <br />
              <br />
              その心配はしなくていいなと安心したことも覚えています！
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
              周りの人といい関係を築きながらお客様ともしっかり向き合えるようになり、
              <br />
              <br />
              働くことが楽しくなったことが、GOOD-DAYに来て良かったと強く思うポイントですね！
              <br />
              <br />
              GOOD-DAYでは、勤務スケジュールや売上目標、メニューなどスタイリストが全て決めることができるので、
              <br />
              <br />
              追い詰められる条件が一つもないから、心と時間の余裕を持てています。
              <br />
              <br />
              勤めていた時のストレスが、GOODーDAYに来て驚くほど無くなりました！(笑)
              <br />
              <br />
              そのため、自分や家族を省みる時間ができて、プライベートも仕事もより楽しむことができています！
              <br />
              <br />
              独立して自分のお店を持ったら、本来しないといけない運営や経理の事務作業を運営スタッフの方が行ってくれるのでお客様への接客、
              <br />
              <br />
              自分の働き方の確立により集中できる本当にありがたい環境だなと、思っています。
              <br />
              <br />
              それに、お互いフリーランスという立場でだけど、協力するところでしっかり協力できるGOOD-DAYの環境がとても気に入っています！
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
              フリーランスに挑戦する時は不安も大きかったですが、
              <br />
              <br />
              今では、たくさんのお客様との出会いがあり、どこでもやっていけるという自信になっています。
              <br />
              <br />
              最初の方は予約が入らない日があったりと不安な時ももちろんありましたが、新規のお客様や紹介いただいたお客様からの予約も増えていきました。
              <br />
              <br />
              今ではフリーランスとしての働き方が確立でき、力を抜きながら頑張ることができるようになってきたと思います！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              ワークライフバランスの両立が今の目標です。
              <br />
              <br />
              30代になってから、体調を崩すことも増えてきたので、長く続けていけるような仕事の向き合い方をしていきたいと思っています。
              <br />
              <br />
              フリーランスという働き方にも慣れてきて、視野も広がってきた今のタイミングで、
              <br />
              <br />
              プライベートも仕事も充実させることができる最適な力の入れ方を見つけたいです！
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
              実際働いていて、頑張りたいことなどの想いに対してバックアップしてくれるので、思い切って飛び込むことができる環境だと思います。
              <br />
              <br />
              「独立したい」と考えている美容師にとっては、「こんなにやってくれる環境はなかなかないよ！」とおすすめしたいです(笑)
              <br />
              <br />
              備品の発注や、事務作業、経理作業、対外的なホームページやホットペッパービューティーの運用なども行ってくれるし、
              <br />
              <br />
              普段行き届かないところを業者が入ってお掃除もしてくれます。それに接客する各ブースにもタブレットや空気清浄機の設置なども行ってくださり、
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
