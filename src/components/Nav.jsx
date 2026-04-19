import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><a href="/#about">About</a></li>
          <li className={styles.navItem}><a href="/#works">Work</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
