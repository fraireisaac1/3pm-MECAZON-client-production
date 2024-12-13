import styles from "../styles/GroceryList.module.css";
import { useState, useEffect, useRef } from "react";

export default function GroceryList({ items }) {
  const [purchased, setPurchased] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const purchase = (k) => {
    const pItem = items.filter((i) => i.id === k);
    setPurchased([...purchased], pItem);
    console.log(purchased);
  }
  useEffect(() => {
    purchase();
  }, [selectedItem]);

  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div key={i.id} className={styles.item}>
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
          <button onClick={purchase} k={i.id}>Buy!</button>
        </div>
      ))}
    </div>
  );
}
