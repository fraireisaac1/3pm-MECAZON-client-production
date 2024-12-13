import { useState, useEffect, useRef } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries({searchValue}) {
  const [groceries, setGroceries] = useState([]);
  const resultsTextRef = useRef(null);

  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        setGroceries(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
  }, [groceries]);

  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    if (productIndex < 0) {
      setProductIndex(0);
    }
    if (productIndex > groceries.length-1) {
      setProductIndex(groceries.length - 1);
    }
  },[productIndex])

  useEffect(() => {
    Object.keys
  }, [searchValue])

  return (
    <div>
      <h1 ref={resultsTextRef}>Results for {searchValue}</h1>
        <div>
          <GroceryList items={groceries} />
        </div>
    </div>
  );
}
