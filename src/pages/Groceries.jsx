import { useState, useEffect, useRef } from "react";
import styles from "../styles/Groceries.module.css";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries({searchValue, setModalData}) {
  const [groceries, setGroceries] = useState([]);
  const [categoryFilterState, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const resultsTextRef = useRef(null);

  async function fetchGroceries() {
    try {
      const response = await axios.get("/dummy-data/products.json");
      // console.log(response.data);

      let tempArray = [];
      response.data.forEach(i => {
        if (!tempArray.includes(i.category)) {
          tempArray.push(i.category);
        }
      });

      setCategories(tempArray);

      setGroceries(response.data);
      return response.data;
    } catch (err) {
      console.error("something went wrong fetching groceries", err);
    }
  }

  async function renderSearchResults() {
    if (searchValue) {
      const response = await axios.get("/dummy-data/products.json");
      let results = response.data;

      if (categoryFilterState !== "") {
        results = results.filter((i) => i.category === categoryFilterState);
      }

      const searchResults = results.filter((i) => i.item.toLowerCase().includes(searchValue.toLowerCase()))

      setGroceries(searchResults);
    } else if (searchValue === "") {
      if (categoryFilterState !== "") {
        const response = await axios.get("/dummy-data/products.json");

        setGroceries(response.data.filter(i => i.category === categoryFilterState));
      } else {
        fetchGroceries();
      }
    }
  }

  useEffect(() => {
    fetchGroceries();
  }, []);

  // useEffect(() => {
  //   // console.log("groceries", groceries);
  //   sessionStorage.setItem("groceries", JSON.stringify(groceries));
  // }, [groceries]);

  useEffect(() => {
    console.log(categoryFilterState);
    renderSearchResults();
  }, [searchValue]);

  useEffect(() => {
    async function renderFilteredResults() {
      const response = await axios.get("/dummy-data/products.json");
      let searchResults = response.data;

      if (searchValue) {
        searchResults = searchResults.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      }

      if (categoryFilterState !== "") {
        const filteredResults = searchResults.filter((i) => i.category === categoryFilterState);

        setGroceries(filteredResults);
      } else {
        fetchGroceries();
      }

      console.log(groceries);
    }

    renderFilteredResults();
  }, [categoryFilterState]);

  return (
    <div className={styles.background}>
      <div className={styles.searchHeaders}>
        <div className={styles.row}>
          <h1 ref={resultsTextRef} className={styles.text}>
            Results for "{searchValue}"
          </h1>
        </div>

        <div className={`${styles.row} ${styles.filtersWrapper}`}>
          <h1>Filters:</h1>

          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select onChange={(e) => {setCategory(e.target.value)}} name="categoryFilter" id="categoryFilter">
            <option value="">--Choose a category--</option>
            {categories.map(i => (
              <option value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <GroceryList setModalData={setModalData} items={groceries} />
      </div>
    </div>
  );
}
