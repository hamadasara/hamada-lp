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
    </main>
  )
}

export default Home
