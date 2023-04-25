//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>藤原朋也さんインタビュー記事</h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって半年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
          <Image
              className={styles.centerImage}
              src={"/media/tomoyainterview.jpg"}
              alt={"藤原さんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              はじめに
            </h2>
            <div className={styles.featuresDescription}>
            今回ご紹介する美容師は、【GOOD-DAY入会半年】(*2023年4月現在)の藤原朋也さん。
            <br />
            <br />
            大阪から岡山に来てGOOD-DAYを選んだ理由は？お客さま0からのスタートはどうだったのか？
            <br />
            <br />
            など藤原さんの仕事に対する想いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
            岡山県出身。大阪の美容専門学校で学び、大阪の美容院にて5年勤務。
            <br />
            <br />
            アシスタント時代グループ会社の中で行われるシャンプー大会にて準優勝。提案力評価9ヶ月MVP。
            <br />
            <br />
            年間アシスタントMVPなどを受賞し、スタイリストデビューを果たした1年目に売り上げMVP受賞など多くの受賞歴を持つ。
            <br />
            <br />
            2022年11月からGOOD-DAY岡山野田店にてフリーランス美容師に。
            <br />
            <br />
            「お客さまの綺麗を思って行動する」ことを大切にしている。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>どうして大阪ではなく、岡山のGOOD-DAYに？</h2>
            <div className={styles.featuresDescription}>
            将来のことを考え、都会よりは落ち着いた地方の自然の豊かな場所で自分のお店をもちたいということが大きな理由の一つです。
            <br />
            <br />
            色々なシェアサロンを調べている時に、母親からGOOD-DAYのことを聞き、とても気になったので
            <br />
            <br />
            まずはお客さまがどんな印象を持つか知るためにサロン見学ではなく、自分がお客として髪を切りに行きました。
            <br />
            <br />
            その時にGOOD-DAYで働いている方の雰囲気の良さ・お店が綺麗・設備も充実していて夢シャンもあるというところに惹かれました。
            <br />
            <br />
            何よりも、他のシェアサロンは単価が決まっているところが多かったのですが、
            <br />
            <br />
            GOOD-DAYはメニュー設定が自由で、ブースのほとんどが個室だからこそ
            <br />
            <br />
            自分のお店を持った感覚で働けるという環境に最大の魅力を感じ、すぐにサロン見学の申し込みをしました！(笑)
            </div>
            <Image
                className={styles.centerImage}
                src={"/media/interviewtomoya01.jpg"}
                alt={"藤原さんインタビュー画像01"}
                width={1080}
                height={800}
              />
          </>
          <>
            <h2 className={styles.featuresTitle}>フリーランスという道を選んだ理由</h2>
            <div className={styles.featuresDescription}>
            「美容院の先輩の姿＝未来の自分の姿だと考えた時に夢が持てなかった」これが1番の理由です。
            <br />
            <br />
            先輩のお給料を聞いても生活が苦しい自分の姿しか想像できませんでした。
            <br />
            <br />
            元々学生の頃から独立したいと思っていました。でも、そのためには多くの開業資金が必要ですが、
            <br />
            <br />
            「シェアサロン」なら初期費用も少額で始めることができるので、
            <br />
            <br />
            「若いうちに挑戦しないと、挑戦できなくなっていく・・・」と考え、フリーランスという道を選びました。

            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>フリーランスとして働き始めて大変だったことは？</h2>
            <div className={styles.featuresDescription}>
            最初は、特に集客面において不安が大きかったです。
            <br />
            <br />
            僕は大阪から来たこともあり、岡山にお客さまゼロの状態で県民性や集客の方法も知らず、わからないことだらけでした。
            <br />
            <br />
            しかしシェアサロンだからこそ、周りにもフリーランスの方がいるので、
            <br />
            <br />
            色々と教えてもらったり、サロン運営スタッフの方にも集客方法などを教えていただきながら予約数を増やしていくことができました。
            <br />
            <br />
            集客においての不安はフリーランスで働く以上消えませんが、だからこそ、その不安が原動力になり頑張ることができています。
            </div>
            <Image
                className={styles.centerImage}
                src={"/media/interviewtomoya02.jpg"}
                alt={"藤原さんインタビュー画像02"}
                width={1080}
                height={800}
              />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYにきてよかったこと</h2>
            <div className={styles.featuresDescription}>
            人生の自由度が増えたことがGOOD-DAYに入会して一番よかったと思うことですね。
            <br />
            <br />
            フリーランスになって手取りも今までの倍以上になり、時間も自由になりました。
            <br />
            <br />
            それだけでなく、GOOD-DAYではメニュー価格や時間の設定など全てに対する自由度がとても高いので
            <br />
            <br />
            自分で色々なことを決められるため、やりがいと手応えを感じながら働くことができています。
            <br />
            <br />
            会社員だと、頑張っても思い描く結果があまり出ませんが、フリーランスだと自分の頑張りがそのまま結果となって表れます。
            <br />
            <br />
            自分がやらないといけないという責任感がいい方向に働き、充実した毎日を過ごすことができています。
            </div>
            <Image
                className={styles.centerImage}
                src={"/media/interviewtomoya03.jpg"}
                alt={"藤原さんインタビュー画像03"}
                width={1080}
                height={800}
              />
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
            売り上げ月100万円！
            <br />
            <br />
            将来的にはお店を開くことも考えています。
            <br />
            <br />
            そのためにも初心を忘れず、今できることを頑張っていきます。
            </div>
            <Image
                className={styles.centerImage}
                src={"/media/interviewtomoya04.jpg"}
                alt={"藤原さんインタビュー画像04"}
                width={1080}
                height={800}
              />
          </>
          <>
            <h2 className={styles.featuresTitle}>フリーランス美容師に興味のある方へ</h2>
            <div className={styles.featuresDescription}>
            最初不安になる気持ち、とても分かります。
            <br />
            <br />
            ただ、実際やってみると割と大丈夫です。何とかなります。
            <br />
            <br />
            特にGOOD-DAYにはフリーランスの先輩がいっぱいいますし、色々なことを教えてくれます。
            <br />
            <br />
            フリーランスだけど1人じゃないというのがシェアサロンのいいところだと思います。
            <br />
            <br />
            正社員に戻ろうと思えばいつでも戻れるのでリスクは早いうちに取っておいた方が良いと僕は思います。
            <br />
            <br />
            年齢が上がるにつれてリスクを取れなくなるという話もよく聞きますし・・・。
            <br />
            <br />
            興味がある方は1度サロン見学に来てみることをおすすめします！
            <br />
            <br />
            GOOD-DAYで働く仲間が増えることを楽しみにしています！
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
