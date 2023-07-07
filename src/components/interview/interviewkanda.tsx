//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          神田敏和さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって半年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewkanda00.jpg"}
              alt={"神田さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の神田敏和さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山県内のサロンに会社員として14年間勤める。
              <br />
              <br />
              その後GOOD-DAYに入会して2年目。美容師歴14年目。似合わせカットと髪質改善が人気。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              低リスクで実力を試せると思ったことが1番の理由です。
              <br />
              <br />
              元々独立したいと思っていたのですが、初期費用やリスクも高いため、一歩踏み出せずにいました…
              <br />
              <br />
              そんな時にGOOD-DAYに出会い、独立するためのステップとして「シェアサロン」という選択は自分にとってプラスだと考えました。
              <br />
              <br />
              会社という看板が無くなった時に、技術、接客、集客で自分にどれだけ実力があるか試せる環境だと思ったので挑戦することに迷いはありませんでしたね。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviewkanda01.jpg"}
              alt={"神田さんインタビュー画像01"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来てよかったこと</h2>
            <div className={styles.featuresDescription}>
              GOOD-DAYに来て収入も増えましたし、時間の使い方も自由になり充実しています。
              <br />
              <br />
              「フリーランス」という働き方に対して、責任の大きさなど不安や心配を感じる方が多いと思いますが、
              <br />
              <br />
              僕の場合は「独立するんだから責任は当然」だし、逆にその方がやりがいを感じますね！
              <br />
              <br />
              それに、今まで以上にお客さまに対して感謝の気持ちを感じるようになりました。
              <br />
              <br />
              「プライベートと仕事の両立が大変そう」という意見もよく耳にしますが、全然気にならないですね！笑
              <br />
              <br />
              スケジュール管理さえしっかりしていれば、プライベートの時間を取ることも難しいと感じません。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviewkanda02.jpg"}
              alt={"神田さんインタビュー画像02"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスとして働き始めて大変だったことは？
            </h2>
            <div className={styles.featuresDescription}>
              独立するときの1番の不安が「集客」だと思います。やはり僕も最初はそうでしたね。
              <br />
              <br />
              でも、悩んでいても始まらない！と思い、誰よりも予約枠を増やしたり、紹介していただいたりして軌道に乗せることが出来ました。
              <br />
              <br />
              今は「集客に対しての不安」から「この先どうしていこう」という次のステージに入ったと感じています。
              <br />
              <br />
              フリーランスとしての働き方が確立されたからこそ、考えることの種類が変わったと感じています。
              <br />
              <br />
              ただ、「1人のお客さまに100％で向き合う一生懸命さ」を大切にしているので、今後もそれは忘れないようにしていきたいですね。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスになる前にしておけば良かったこと
            </h2>
            <div className={styles.featuresDescription}>
              「シュミレーションをしておくこと」が大事だと思います。
              <br />
              <br />
              独立するときに悩むのが価格設定です。
              <br />
              <br />
              自分の技術に対する価値の把握はしておいた方がいいと思います。そうすることで最初の価格設定も変わってくると思います。
              <br />
              <br />
              また、「情報にアンテナを張っておく」ということも大切です。
              <br />
              <br />
              お店で働いている時は、お店が用意している商材しか使わないと思いますが、フリーランスになったら商材選びも自分次第なんです。
              <br />
              <br />
              だからこそ、知っておくことってとても大切なんです。こだわりを追求する楽しみも増えますよ！笑
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviewkanda06.jpg"}
              alt={"神田さんインタビュー画像04"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後のステップについて</h2>
            <div className={styles.featuresDescription}>
              GOOD-DAYはお店自体の休みがないため、自分が休んでいても営業しているという状況は、大きなメリットだと思います。
              <br />
              <br />
              お店がいつも空いている＝活気があるということにも繋がり、お客さまも来店しやすいと思います。
              <br />
              <br />
              また集客面でも、広告費などの経費や、駐車場台数や設備など、1人ではこんな充実した環境は作れないなと感じています。
              <br />
              <br />
              他にも、周りのフリーランス美容師に相談したり、情報収集が出来るシェアサロン独自のメリットもあります。
              <br />
              <br />
              こういったメリットは体感しなければ気付けなかったでしょうし、
              <br />
              <br />
              「フリーランス」という働き方の深さに気づくことができたからこそ、今後のステップについてはじっくり考えていきたいです。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              独立したい、やってみたいと思っているのであれば、ぜひ動いてみて欲しいです。
              <br />
              <br />
              不安は確かにありますが、早く動いておけば良かったと思うことも多いので、興味があるなら「とりあえず動いてみる」ということをお勧めします！
              <br />
              <br />
              働いてみたら選択肢が増えて未来の可能性も広がるはずです。
              <br />
              <br />
              今の不安は行動することで減らせると思うので、一度きりの人生、後悔しないように、まずはサロン見学だけでも来て欲しいです！
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
