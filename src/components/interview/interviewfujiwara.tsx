//ともやしインタビュー記事のコンポーネント(内容)
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Interview/article.module.scss";

function Features() {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>
          藤原由香さんインタビュー記事
        </h2>
        <p className={styles.featuresMainSubTitle}>
          フリーランスになって2年、想うこと。
        </p>
        <div className={styles.featuresArea}>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara00.jpg"}
              alt={"fujiwaraさんインタビュー画像00"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>はじめに</h2>
            <div className={styles.featuresDescription}>
              今回ご紹介する美容師は、【GOOD-DAY入会2年】(*2023年4月現在)の藤原由香さん。
              <br />
              <br />
              なぜフリーランスという働き方を選んだのか、その思いに迫ります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>美容師プロフィール</h2>
            <div className={styles.featuresDescription}>
              岡山県内の美容専門学校卒業後、岡山市内の美容院にて1年半、倉敷市内の美容院にて9年間勤務。
              <br />
              <br />
              結婚や出産などライフスタイルの変化に合わせて引っ越しや転職をする中でGOOD-DAYに出会い入会。
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara01.jpg"}
              alt={"fujiwaraさんインタビュー画像01"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランスという道を選んだ理由
            </h2>
            <div className={styles.featuresDescription}>
              自由な時間が欲しかったのが大きな理由です！
              <br />
              <br />
              家族との時間を増やしたかったので、仕事とプライベートを両立できる働き方を選びました。
              <br />
              <br />
              私は、一人一人のお客さまを最初から最後まで丁寧に接客したいとずっと思っていたんです。
              <br />
              <br />
              だから、GOOD-DAYでフリーランスとして働くことで、理想の接客を実現できると思えたんです！
              <br />
              <br />
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara02.jpg"}
              alt={"fujiwaraさんインタビュー画像02"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>GOOD-DAYを選んだ理由</h2>
            <div className={styles.featuresDescription}>
              専門学生時代から仲の良かった先輩がGOOD-DAYで働いていて、色々と話を聞いているうちに興味を持ちました。
              <br />
              <br />
              実際サロン見学をした時に、店内が明るくて綺麗だったことや、設備の良さに圧倒されました。
              <br />
              <br />
              個室環境はもちろん、夢シャンがあるのは嬉しかったですね！
              <br />
              <br />
              家族との時間を増やしたくて時間に融通の効く働き方を検討していた時期だったので、他社も色々と調べましたが、
              <br />
              <br />
              同じ主婦という立場の先輩スタイリストがGOOD-DAYで仕事と家族の時間を充実させている様子をみて私も働きたい！と思いました。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>
              フリーランスとして働き始めて大変だったことは？
            </h2>
            <div className={styles.featuresDescription}>
              最初はお客さまゼロからのスタートだったので、集客面では不安が大きかったです。
              <br />
              <br />
              ただ、働き始めてホットペッパービューティーやインスタグラムで私の事を知ってくれたお客さまから少しずつ予約が入るようになり、
              <br />
              <br />
              ダイレクトにお客さまとやりとりできることや自分の理想の接客ができることもあり、今では楽しく働けています。
              <br />
              <br />
              また、仕事とプライベートの切り分けが最初は難しかったのですが、最近では日曜日と月曜日は基本的に休みにしていて
              <br />
              <br />
              自分の中でフリーランスとしての働き方が確立できて、充実した毎日を過ごせています！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara04.jpg"}
              alt={"fujiwaraさんインタビュー画像04"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              GOOD-DAYなら家庭と仕事の両立ができる
            </h2>
            <div className={styles.featuresDescription}>
              GOOD-DAYでフリーランスという働き方に挑戦して本当によかったです！(笑)
              <br />
              <br />
              家庭と仕事の両立の難しさを感じている主婦の方は多いと思うのですが、私もその内の1人でした。
              <br />
              <br />
              自分の好きな仕事を続けるには大切な家族との時間を削るしかないと諦めていましたけど、
              <br />
              <br />
              GOOD-DAYで働き始めて、家族との時間を作り易くなりました。
              <br />
              <br />
              GOOD-DAYでは、出勤時間も休日も自由なので、スケジュール管理をしっかり行うことで、
              <br />
              <br />
              周りのスタッフに迷惑をかけることなく、家庭を優先して休むこともできています。
              <br />
              <br />
              家庭も仕事も妥協しないでいい素晴らしい環境に出会えて本当に良かったです！
            </div>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara05.jpg"}
              alt={"kahoさんインタビュー画像05"}
              width={1080}
              height={800}
            />
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYに来て良かったこと</h2>
            <div className={styles.featuresDescription}>
              時間が自由になったことがやはり私にとって1番嬉しいことです！
              <br />
              <br />
              家族のイベントを優先したい時、すぐに予定を組めるのはありがたいですね。
              <br />
              <br />
              予約でいっぱいの日でも、「勤めにいく」ではなく「好きなことをしに行く」という感覚なので、ストレスが本当に減りました！
              <br />
              <br />
              毎日が楽しくて仕方ないんです！(笑)
              <br />
              <br />
              それに、倉敷中島店のスタイリストはみんな本当に良い人ばかりなんですよ！
              <br />
              <br />
              やはりお店の雰囲気って大切だと思うので、仲の良さも働くのが楽しい理由の一つですね！
              <br />
              <br />
              また、わからないことを他のスタイリストに教えてもらえたりするので、それが自分の技術になったり、今までしてなかったことにも挑戦するようになりました。
              <br />
              <br />
              ストレスが少なくなった分、自己成長に意欲的になれる環境だと思います！
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>今後の目標</h2>
            <div className={styles.featuresDescription}>
              できることの幅を増やしていくことです！
              <br />
              <br />
              今、着付けの勉強もしているのですが、勤めているとなかなか挑戦できなかった「やってみたい事」にこれからはどんどん挑戦していこうと思っています！
              <br />
              <br />
              一番は家族との時間を充実させながら無理せず楽しく働きたいと思っているので、この調子で自分なりの働き方を確立していきたいです！
            </div>
          </>
          <>
            <Image
              className={styles.centerImage}
              src={"/media/interviewfujiwara06.jpg"}
              alt={"kahoさんインタビュー画像06"}
              width={1080}
              height={800}
            />
            <h2 className={styles.featuresTitle}>
              フリーランス美容師に興味のある方へ
            </h2>
            <div className={styles.featuresDescription}>
              子育てを優先すると、自分がしたい仕事を諦めてしまう主婦の方って多いと思うんです。
              <br />
              <br />
              でも、実際に主婦の私がGOOD-DAYで働き始めてみて、子育てと両立して自分のやりたい仕事である「美容師」を楽しめているので、
              <br />
              <br />
              GOOD-DAYなら、仕事と子育てを両立できるすごくいい環境だと思います。
              <br />
              <br />
              ぜひ迷っている方は一度サロン見学に来る事をおすすめします！
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
