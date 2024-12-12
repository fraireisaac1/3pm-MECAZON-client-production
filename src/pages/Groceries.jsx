import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("http://localhost:3000/dummy-data/groceries");

        // set the state of the groceries to the response.data
        setGroceries(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    // console.log(groceries);
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    // console.log(JSON.parse(sessionStorage.getItem("groceries")));
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

  return (
    <div>
      <h1>Groceries</h1>
      <div>
        <button onClick={() => { setProductIndex(prev => prev - 1) }}>-</button>
        <GroceryList items={groceries.slice(productIndex, productIndex + 3)} />
        <button onClick={() => { setProductIndex(prev => prev + 1) }}>+</button>
      </div>
    </div>
  );
}
