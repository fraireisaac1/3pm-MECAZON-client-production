import styles from "../styles/SearchBar.module.css";
import { useRef } from "react";

export default function Search({setSearchValue}) {
    const inputRef = useRef(null);

    function submitSearch(e) {
        if (e.key === "Enter" || e.type === "click") {
            setSearchValue(inputRef.current.value);
        }
    }

    return (
        <div className={styles.searchWrapper}>
            <input ref={inputRef} onKeyDown={submitSearch} className={styles.searchInput} type="text" placeholder="Search" />

            <img onClick={submitSearch} className={styles.searchIcon} src="/search_icon.svg" alt="search bar icon" />
        </div>
    );
}