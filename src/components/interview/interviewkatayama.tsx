//かたやまさんインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          かたやまはるかさんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって3年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/katayamainterview00.jpg"}
              alt={"かたやまさんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会3年】(*2023年4月現在)のかたやまはるかさん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山市内の美容院にて4年間勤務。
              <br />
              <br />
              その後働き方や将来を模索している中でGOOD-DAYに出会い、2020年4月からフリーランス美容師としてGOOD-DAYで働き始める。
              <br />
              <br />
              現在は、訪問美容師や調理師としてGOOD-DAY以外の場所でも働いている。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              人間関係や時間に縛られたくないと思ったことが、フリーランスという道を選んだ1番の理由です。
              <br />
              <br />
              フリーランスに元々興味がありましたが、シェアサロンは自分で開業するよりも低リスクで始めることができるし、
              <br />
              <br />
              自由度の高さに魅力を感じ、思い切って始めてみることにしました。
              <br />
              <br />
              <Image
                className={styles.centerImage}
                src={"/media/katayamainterview01.jpg"}
                alt={"かたやまさんインタビュー画像01"}
                width={1080}
                height={800}
              />
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              自由度の高さに魅力を感じ、私はGOOD-DAYを選びました。
              <br />
              <br />
              フリーランス美容師としての働き方は、GOOD-DAYのようなシェアサロンの他に、「業務委託」という選択肢があり、私も当時はいろんなサロンを比較していました。
              <br />
              <br />
              ただ、「業務委託」は単価が安かったり、お客さまの層が決まっていたりして自由度が低い事と、数をこなすことを求められるので自分には向いていないと感じました。
              <br />
              <br />
              GOOD-DAYにサロン見学に来た時に、「時間・人間関係・メニュー・接客スタイル」など全て自由で、自分で決めていけることがとても魅力的でした。
              <br />
              <br />
              美容室で働いていると、お客さまよりもスタッフに気を遣う場面が多々ありましたが、
              <br />
              <br />
              GOODーDAYだと、接客スタイルを自分で決めれるからこそお客さまファーストになれることも私の理想の働き方を実現できると感じました！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスとして働き始めて大変だったことは？
            </h2>
            <div className={styles.featuresDescription}>
              私は固定のお客さまがゼロの状態からスタートしたので、本当にできるのか？という不安が入会当初はありました。
              <br />
              <br />
              特に集客の面で不安が大きかったですね。
              <br />
              <br />
              ですが、「縛られない環境への魅力」や「挑戦したい」という気持ちの方が強かったです。
              <br />
              <br />
              フリーランスだからこそ「自分でやるしかない」というプレッシャーがやる気に繋がり、
              <br />
              <br />
              DMを送ったりポスティングをしてみたりと不安を原動力に行動することができるようになりました。
              <br />
              <br />
              その結果、お客さまからの予約も増え、自分の成長をダイレクトに感じることができるので毎日やりがいを感じることができています。
              <br />
              <br />
              それに、シェアサロンだから困った時に助け合ったり、同じ環境で頑張っている仲間がいることに助けられ、刺激にもなっています。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/katayamainterview02.jpg"}
              alt={"かたやまさんインタビュー画像02"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>
              なぜダブルワークをしようと思ったのか
            </h2>
            <div className={styles.featuresDescription}>
              1つの職業にとらわれたくないと思っていたからです！
              <br />
              <br />
              せっかく自分の自由な働き方ができるなら、いろんなことに挑戦したいと思い、訪問美容のカットも始めました。
              <br />
              <br />
              将来、妊婦さんや高齢の方など、美容院にいけない人の役に立ちたいと思っていたので、訪問美容では介護や手助けの勉強もでき、とてもやりがいを感じています。
              <br />
              <br />
              GOOD-DAYは自由度が高く働きやすいからこそ、「なんでも挑戦できる」私にとってはありがたい環境です。
              <br />
              <br />
              会社員の時よりも、生き生きとした毎日を過ごしています。
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/katayamainterview03.jpg"}
              alt={"かたやまさんインタビュー画像03"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来てよかったこと</h2>
            <div className={styles.featuresDescription}>
              お客さまへの接客に集中できる環境はありがたいなと改めて感じています。
              <br />
              <br />
              しっかりと1対1の関係性を築けるからこそいろんな話ができ、そこから学ぶこともあります。
              <br />
              <br />
              GOOD-DAYで働く前は正直、お客さまと「関わる」ではなく「こなす」という感覚でした。
              <br />
              <br />
              それが私には「追われている」と感じることが多く、会社員として働いている時は辛かったですが、今は何もかも自分で決めて自由にできるから
              <br />
              <br />
              お客さまとも深く関われるし、納得するまで接客できることが嬉しいです。
              <br />
              <br />
              それに、GOOD-DAYの設備も「ここまでしてもらえるの？」と思うくらいすごいです！(笑)
              <br />
              <br />
              各ブースにタブレットや空気清浄機など、本来はスタイリストが各自で用意しないといけないはずの物を用意してくださるのはありがたいです。
              <br />
              <br />
              設備だけでなく、技術や集客の講習会なども開催してくださり運営側がスタイリストの働きやすさをしっかりと考えてくださっていることが伝わるので、
              <br />
              <br />
              それがみんな楽しそうに働けている理由なのかなと思います！
              <br />
              <br />
              この前は集まれる倉敷中島店のメンバーでBBQに行ったぐらい、仲が良いのもGOOD-DAYに来てよかったと思えるポイントです！
              <br />
              <br />
              やっぱりフリーランス美容師として働いているメンバーは、いろんな環境から集まってきた人たちだからこそ、
              <br />
              <br />
              色んな価値観、考え方、技術を持っていて、それを共有し合えることが刺激にも勉強にもなり、働くのが本当に楽しいです！(笑)
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/katayamainterview04.jpg"}
              alt={"かたやまさんインタビュー画像04"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              もっと色々な技術を取り入れていきたいなと思っています。
              <br />
              <br />
              そのための時間を作っていきたいし、学んで成長していきたいです。
              <br />
              <br />
              さらにもっとたくさんのお客さまと関わることができるように、ブログを書いたり、インスタの投稿数を増やしたりと行動量も上げていきたいです！
              <br />
              <br />
              また、訪問美容の仕事も楽しみながら継続していきたいです。
              <br />
              <br />
              将来、妊婦の方や介護が必要な方の役にもっと立てるようになりたいとも思っているので、色んな方と関わる中で学び、成長していきたいです！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              1歩踏み出すことに不安を感じて躊躇している方は多いと思います。でも大丈夫です！
              <br />
              <br />
              何もしなかったら何もしないなりの結果が返ってくる反面、やればやるほど結果が返ってくる働き方だから自分次第なんです。
              <br />
              <br />
              だから、向上心やチャレンジ精神が少しでもあるんだったら飛び込んでみてもいいのでは？と思います。
              <br />
              <br />
              誰にも甘えられない働き方ではありますが、「自分でなんとかするしかない」から、成長をダイレクトに感じることができる日々はとても充実しています。
              <br />
              <br />
              集客が思うようにいかず苦しい期間があっても、お客さまに喜んでもらえたり、次回予約をいただけると達成感があり、それが楽しさに繋がりますよ！
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
