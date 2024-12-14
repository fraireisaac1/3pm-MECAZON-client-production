import { useState, useEffect, useRef } from "react";
import GroceryList from "../components/GroceryList";
import styles from "../styles/Groceries.module.css";
import axios from "axios";

export default function ShoppingCart({ searchValue }) {
  const [purchased, setPurchased] = useState([]);
  const resultsTextRef = useRef(null);

  async function fetchPurchased() {
    try {
      const response = JSON.parse(sessionStorage.getItem("purchased"));
      console.log("response", response);
      setPurchased(response);
    } catch (err) {
      console.error("something went wrong fetching the purchased items", err);
    }
  }

  useEffect(() => {
    fetchPurchased();
  }, []);

  useEffect(() => {
    async function renderSearchResults() {
      if (searchValue) {
        const response = await axios.get("/dummy-data/groceries.json");

        const results = response.data.filter((item) => {
          return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchValue.toLowerCase())
          );
        });

        setGroceries(results);
      } else if (searchValue === "") {
        fetchGroceries();
      }
    }

    renderSearchResults();
  }, [searchValue]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={styles.background}>
        <h1 ref={resultsTextRef} className={styles.text}>
          Results for "{searchValue}"
        </h1>
        <div>
          <GroceryList items={purchased} />
        </div>
      </div>
    </>
  );
}
