import styles from './Home.module.css'

const Home = () => {
  return (
    <main>
      {/* メインビジュアル */}
      <section id="mv" className={styles.mv}>
        <div className={styles.siteTtl}>
          <h1 className={styles.ttlName}>SARA HAMADA</h1>
          <h2 className={styles.mvSub}>portfolio</h2>
        </div>
        <p className={styles.mainvisual}>
          <img src="/assets/imgs/mainvisual.png" alt="" />
        </p>
      </section>
      {/* aboutセクション */}
      <section id="about" className={styles.about}>
        <p className={styles.aboutLoad}>
          <img src="/assets/imgs/about-load.png" alt="" />
        </p>
        <div className={styles.aboutBox}>
          <div className={styles.aboutTtl}>
            <p className={styles.topic}>about</p>
            <p className={styles.aboutTxt}>
            クライアントの「こうしたい」という想いを丁寧に引き出し、わかりやすくチームに伝え、<br/>
              システムとして形にできるエンジニアを目指しています。<br />
              また、デザインやユーザー体験の視点も取り入れ、「使いやすさ」と「見た目の美しさ」の<br/>
              どちらも大切にできる存在になりたいと考えています。
            </p>
          </div>
          <div className={styles.aboutMore}>
            <p><a href="/about">more</a></p>
          </div>
        </div>
      </section>

      {/* Worksセクション */}
      <section id="works" className={styles.works}>
        <h2 className={styles.topic}>work</h2>
        <div className={styles.worksList}>
          <div className={styles.worksContents}>
            <a href="/work/donut"><img src="/assets/imgs/work-donut.png" alt="カフェどぅなつ" /></a>
            <p className={styles.contentsTxt}>【仮想サイト】カフェ"どぅなつ"</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/sugutabe"><img src="/assets/imgs/work-sugutabe.png" alt="食品宅配サービスLP" /></a>
            <p className={styles.contentsTxt}>【学校課題】食品宅配サービスLP</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/slash"><img src="/assets/imgs/work-slash.png" alt="エステサロンslash" /></a>
            <p className={styles.contentsTxt}>【仮想サイト】エステサロン"slash"</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/esute"><img src="/assets/imgs/work-esute.jpg" alt="フェイシャルエステ" /></a>
            <p className={styles.contentsTxt}>【架空】フェイシャルエステのキャンペーンバナー</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/kissatenn"><img src="/assets/imgs/work-kissatenn.png" alt="旅行記事サイト" /></a>
            <p className={styles.contentsTxt}>【架空】旅行記事サイトのアイキャッチ</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/strawberry"><img src="/assets/imgs/strawberry-pop.png" alt="新商品宣伝バナー" /></a>
            <p className={styles.contentsTxt}>【架空】新商品の宣伝バナー</p>
          </div>
          <div className={styles.worksContents}>
            <a href="/work/reizouko"><img src="/assets/imgs/reizouko.png" alt="整理整頓POP" /></a>
            <p className={styles.contentsTxt}>【クライアントワーク】整理整頓POP</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
