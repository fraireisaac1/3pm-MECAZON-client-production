import { Link } from "react-router-dom";
import Search from "../components/Search";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">MECHAZON</Link>
      <Search></Search>
      <Link to="/groceries">Groceries</Link>
    </nav>
  );
}
