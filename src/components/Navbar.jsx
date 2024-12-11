import { Link } from "react-router-dom";
import Search from "../components/Search";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="nav-col">
        <img src="https://www.shareicon.net/data/512x512/2016/08/01/640375_smile_512x512.png" alt="mecazon logo" height="25px" width="25px" />
        <Link to="/">MECAZON</Link>
      </div>

      <div className="nav-col">
        <Search></Search>
      </div>

      <div className="nav-col">
        <Link to="/groceries">Sign in</Link>
      </div>
    </nav>
  );
}
