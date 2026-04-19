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
    </main>
  )
}

export default Home
