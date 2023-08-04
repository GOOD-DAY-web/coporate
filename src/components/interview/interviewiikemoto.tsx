//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          池本麻紀子さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewikwmoto000.jpg"}
              alt={"池本さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の池本麻紀子さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山県内のサロンに会社員として23年間勤める。
              <br />
              <br />
              その後業務委託でフリーランスとして５年間働いた後、GOOD-DAYに入会して2年目。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewikemoto01.jpg"}
                alt={"池本さんインタビュー画像01"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              全ブース個室であること・メニューが全て自由に決められることに魅力を感じ、GOOD-DAYを選びました。
              <br />
              <br />
              業務委託で働ける他のサロンも検討していましたが、他と比べてGOOD-DAYでは
              <br />
              <br />
              メニューや勤務時間など様々な面で自由度が高いことが、とても魅力的でした。
              <br />
              <br />
              私は、スカルプケアの技術や育毛などの技術を今後取り入れていきたいと思っていて、それには周りの目が気になったり、
              <br />
              <br />
              話し声がうるさくリラックスできないという環境は避けたいと考えていました。
              <br />
              <br />
              GOOD-DAYは全部屋個室に加え、設備も充実していて私にとってもお客さまにとっても嬉しいポイントだなと思い入会を決めました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewikemoto02.jpg"}
                alt={"池本さんインタビュー画像02"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              同じ目標を持っている人たちが集まっている環境で働くことの楽しさを体感しています。
              <br />
              <br />
              自分がわからないことや課題になっている部分を周りの人を見て知ることができたり、相談できたりするので自然とやる気が湧いてきて、
              <br />
              <br />
              自分の施術や接客をどうすればもっと良くできるかなど、考えることができています！
              <br />
              <br />
              また、運営の方もアットホームで働きやすいです。
              <br />
              <br />
              集客や、独立支援などのセミナーもあり、「シェアサロンってこんなにフォローしてくれるんだ！」というのが素直な感想です笑
              <br />
              <br />
              自分1人だと、日常に流されてしまう部分があり、集客など考えないといけないことにフォーカスするきっかけをもらえることはありがたく、
              <br />
              <br />
              GOOD-DAYを選んで良かったなと思っています。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewikemoto03.jpg"}
                alt={"池本さんインタビュー画像03"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスの方が家庭と仕事を両立しやすい？
            </h2>
            <div className={styles.featuresDescription}>
              フリーランスの方が両立しやすいと思います！
              <br />
              <br />
              お休みも自由だし、時間ができたら家に帰ることができるのは家庭と仕事を両立する上でとても大事なポイントだと感じています。
              <br />
              <br />
              家庭と仕事の優先順位ってその時々で違うじゃないですか。その状況に応じて干渉されることなく自分で決められることは、
              <br />
              <br />
              フリーランスで働くメリットだと思います。
              <br />
              <br />
              その分会社員より責任は大きくなりますが、数字や時間に追われる感じもないので、
              <br />
              <br />
              そこをストレスに感じる方にはとても良い働き方だと思います！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              独立したいという考えがGOOD-DAYでどう変化したか
            </h2>
            <div className={styles.featuresDescription}>
              自宅兼サロンを開くことが理想です。
              <br />
              <br />
              全ブース個室なので、業務委託の時よりもプライベートサロンに近い感覚で働けるため、
              <br />
              <br />
              独立したときのシュミレーションをしやすい環境ですね。私のように独立を考えている人は
              <br />
              <br />
              独立の前段階として、気持ちの準備だけでなく、資金準備や経営を知る時間としてもGOOD-DAYで働くことを
              <br />
              <br />
              選択肢として持っても良いのでは？とも思いますね。
              <br />
              <br />
              でも、正直なところ、GOOD-DAYの居心地がよくて抜け出せないかもしれません笑
              <br />
              <br />
              というのも、GOOD-DAYでは、事務作業など接客以外のことを行ってもらえるので、接客に集中できますし、
              <br />
              <br />
              出勤時間も自由で楽しく働けているので、この環境を手放すのが少し惜しいなとも感じますね…笑
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviewikemoto04.jpg"}
              alt={"池本さんインタビュー画像04"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の将来像</h2>
            <div className={styles.featuresDescription}>
              スキルの面では髪質改善や頭皮ケアのメニューにも力を入れていきたいですね！
              <br />
              <br />
              接客面でも、カウンセリングの徹底は欠かさず行っていきたいです。
              <br />
              <br />
              お客さまのお悩みに寄り添いたいですし、そのお悩みを改善することのできる新メニューも作っていきたいです。
              <br />
              <br />
              GOOD-DAYにずっと居たいという気持ちもありますが（笑）、独立は私の夢でもあるので、
              <br />
              <br />
              今後独立に向けて少しずつ具体的に動きながら、どの働き方が1番最適なのか、もう一度しっかり考えたいなと思っています！
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/interviewikemoto05.jpg"}
                alt={"池本さんインタビュー画像05"}
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
              一歩踏み出してみると良いと思います。
              <br />
              <br />
              踏み出すことは少し怖いかもしれませんが、踏み出すことで変わる部分もあると思います。
              <br />
              <br />
              実際に私も、GOOD-DAYに来てみて良かったなと思っています！
              <br />
              <br />
              もちろん、フリーランス美容師になるということは責任も大きいと思いますが、
              <br />
              <br />
              その環境に立って初めて「自分がどうしないといけないか」ということを明確に考えることができます。
              <br />
              <br />
              そこで、自然と「こうしていきたい」という道が見えたり、増えたりしてくるものだと思います。
              <br />
              <br />
              GOOD-DAYは、シェアサロンだけどフォローもしっかりしてくれるし、運営の方や、周りのスタイリストも良い人ばかりで相談しやすい環境です！
              <br />
              <br />
              入会するか悩んでいる方は、まずはサロン見学だけでも来てみて欲しいです！
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
