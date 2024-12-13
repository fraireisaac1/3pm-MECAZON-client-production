import styles from "../styles/SearchBar.module.css";

export default function Search() {
    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} type="text" placeholder="Search" />

            <img className={styles.searchIcon} src="/search_icon.svg" alt="search bar icon" />
        </div>
    );
}