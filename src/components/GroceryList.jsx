import styles from "../styles/GroceryList.module.css";
import { useState, useEffect } from 'react';

export default function GroceryList({ items }) {
  const [purchased, setPurchased] = useState([]);
  useEffect(() => {
  async function purchase(key) {
    const pItem = items.filter(i => i.id === key)
    setPurchased([...purchased], pItem)
  }
  }, []);

  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
          <button>Buy!</button>
        </div>
      ))}
    </div>
  );
}
