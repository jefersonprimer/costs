import { Link, Image } from 'react-router-dom'

import Container from './Container';

import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to={logo}>
          <Image src={logo} alt="logo Costs"></Image>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;