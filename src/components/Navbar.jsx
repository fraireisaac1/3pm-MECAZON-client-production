import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react'
import Search from "../components/SearchBar";
import styles from "../styles/Navbar.module.css";
export default function Navbar({ setSearchValue }) {
  let route = '/login'
  let phrase = 'Sign In'
  function isLoggedIn() {
    const isLogged = localStorage.getItem("loggedIn");
    const username = localStorage.getItem('username')
    if (JSON.parse(isLogged) === true) {
      phrase = `Hello ${username}`;
      route = '/shopping-cart'
    }
  }
  isLoggedIn()
  return (
    <nav className={styles.nav}>
      <div className={`${styles.col} ${styles.brand}`}>
        <Link className={styles.logoWrapper} to="/">
          <img className={styles.logo} src="/MECAZON_logo.svg" alt="mecazon logo" height="35px" width="35px" />
          <p>MECAZON</p>
        </Link>
      </div>

      <div className={styles.col}>
        <Search setSearchValue={setSearchValue}></Search>
      </div>

      <div className={`${styles.col} ${styles.userButtons}`}>
        <Link className={styles.loginLink} to={route}>
          <p id="phrase" >{phrase}</p>

          <img src="/account_icon.svg" height="30px" width="30px" alt="user account icon" />
        </Link>

        <Link className={styles.cartLink} to="/shopping-cart">
          <img src="/cart_icon.svg" alt="shopping cart icon" height="50px" width="50px" />
        </Link>
      </div>
    </nav>
  );
}
