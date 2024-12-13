import GroceryList from "./GroceryList";
import styles from "../styles/Carousel.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Carousel() {

    const [index, setIndex] = useState(0)
    const [groceries, setGroceries] = useState([]);

    useEffect(() => {
        if (index < 0) {
            setIndex(0)
        }
    }, [index]);

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

    return (
        <div className={styles.row}>
            <button onClick={() => { setIndex(prev => prev -= 1); }}>-</button>
                <div className={styles.items}>
                {groceries.slice(index, index + 3).map(i => (
                    <div>{i.name}</div>
                ))}
                </div>
            <button onClick={() => {setIndex((prev) => prev+=1); }}>+</button>
        </div>
    );
}