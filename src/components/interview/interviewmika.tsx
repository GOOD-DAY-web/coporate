//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          田原美華さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewmika00.jpg"}
              alt={"田原さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会3年】(*2023年5月現在)の田原美華さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の専門学校卒業後、15年間サロンにて勤務しGOODーDAYに入会。
              <br />
              <br />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由」
            </h2>
            <div className={styles.featuresDescription}>
              子供に時間を使ってあげたいという想いが強くなり、
              <br />
              <br />
              時間に縛られないフリーランスという働き方を選びました。
              <br />
              <br />
              入会前は体調を崩すことが多くなり、仕事と家庭の両立の難しさを感じて美容師として働くことを辞めようとしていました。
              <br />
              <br />
              でも、今までずっと来てくださっているお客さまとの関係は大切にしていきたいという想いもあり、
              <br />
              <br />
              「面貸しサロン」や「シェアサロン」で働くフリーランスなら、時間に縛られない働き方ができるんじゃないかと考えました。
              <br />
              <br />
              「仕事と家庭の両立」と、「お客さまを大切にすること」の両方を叶えられる理想の働き方だったので、
              <br />
              <br />
              フリーランスとして働くことに対して不安は一切なかったですね！(笑)
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewmika01.jpg"}
                alt={"池本さんインタビュー画像01"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              私の理想の働き方ができる環境だったからです！
              <br />
              <br />
              勤めていると、自由な時間を作るためには出勤日を減らし時短で働く必要がありますが、
              <br />
              <br />
              時短で働くと、今度は金銭面が不安になっていました。
              <br />
              <br />
              だからといってフルタイムで働くと、育児、家事、仕事の両立が難しく、心身ともにしんどくなり、家でイライラしちゃう事もしばしば…
              <br />
              <br />
              このような両立の難しさに悩んでいる時にGOOD-DAYに出会い、
              <br />
              <br />
              自由な時間と金銭面の両方で自分の理想を実現できるなと思いGOOD-DAYを選びました。
              <br />
              <br />
              実際に働いてみても、時間に追われている感覚がなく、心の余裕を持てるようになったことで、
              <br />
              <br />
              楽しく育児、家事、仕事の両立ができるようになりました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewmika02.jpg"}
                alt={"池本さんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              「美容師」という仕事をより楽しめるようになったことです。
              <br />
              <br />
              いくら好きでも、無理矢理やらされ続けると嫌いになることってあると思います。
              <br />
              <br />
              私も、最初は美容師という仕事が好きで、楽しめていたのですが、いつの頃からかそうではなくなっていく感覚がありました。
              <br />
              <br />
              でも、GOOD-DAYでは自分のペースでできるからこそ時間に追われる感覚がなく、
              <br />
              <br />
              「美容師」という仕事を好きなまま続けらることがとても嬉しいし、やりがいもあります！
              <br />
              <br />
              仕事だけでなくプライベートにも張りがでてきました！
              <br />
              <br />
              それに、中島店のスタイリストはみんな仲がよく、私の友達も働いているので、
              <br />
              <br />
              なんでも相談しやすい環境ということも、楽しく働けているポイントです。
              <br />
              <br />
              友達と一緒に働いていても、お互い個人事業主同士だからこその共感やアドバイスができるので、プラスでしかないですね！
              <br />
              <br />
              個人事業主として働くことで、今までは周りの人がしてくれていたことを全て自分でしないといけないから
              <br />
              <br />
              「人に対する感謝の気持ち」が大きくなったのも、この働き方を選んで良かったなと思うことの一つです。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewmika03.jpg"}
                alt={"池本さんインタビュー画像03"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              パートの時とGOOD-DAYでの扶養内、何が違う？
            </h2>
            <div className={styles.featuresDescription}>
              私は、1番下の子がまだ小さいので、現在は扶養内で働いています。
              <br />
              <br />
              GOOD-DAYに入会する前も、パートで扶養内で働いていましたが、
              <br />
              <br />
              その時と比べると、出勤時間は減ったにもかかわらず、収入は増え、生産性の良さを体感しています。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              家庭と仕事の両立はできている？
            </h2>
            <div className={styles.featuresDescription}>
              できています！
              <br />
              <br />
              ストレスを感じることなく楽しく働けているので、家でイライラすることも減りました。
              <br />
              <br />
              GOOD-DAYでは、空き時間を自由に使えるので、
              <br />
              <br />
              家事育児の時間だけでなく、自分に使う自由な時間も取れるようになり、最高です！(笑)
              <br />
              <br />
              特に主婦の方は、自由な時間と金銭面の優先順位が変動する時があると思います。
              <br />
              <br />
              そんな時も、柔軟に優先順位を変えながら働けるので、GOOD-DAYはすごくおすすめです！
              <br />
              <br />
              正直、「主婦美容師みんな、GOOD-DAYに来たらいいのに…」って思っています！(笑)
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewmika04.jpg"}
                alt={"田原さんインタビュー画像04"}
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
              GOOD-DAYは何も諦めずに働ける環境だと思います！
              <br />
              <br />
              働き方を変えることは、不安だし、なかなか一歩踏み出せない気持ちもわかりますが、
              <br />
              <br />
              そんなに不安に思わなくていいと私は思います。
              <br />
              <br />
              集客のこともそうですが、フリーランスとしての働き方で
              <br />
              <br />
              不安なことに対してのフォローもしっかりしてくれて、働きやすいです。
              <br />
              <br />
              確定申告も、1度行えば慣れるのであまり身構え過ぎないでいいと思います。
              <br />
              <br />
              運営の方だけでなく、周りのスタイリストにもなんでも聞ける環境なので、まずはサロン見学に来てみてください！
              <br />
              <br />
              1人で来るのが不安であれば、友達同士で見学に来るのもおすすめですよ！
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
