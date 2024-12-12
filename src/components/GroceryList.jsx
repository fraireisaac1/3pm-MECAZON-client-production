import styles from "../styles/GroceryList.module.css";
import { useState } from 'react';

export default function GroceryList({ items }) {
  const [purchased, setPurchased] = useState([]);
  async function purchase() {
    items.forEach(i => {
      setPurchased(i);
    });
    console.log("hello", purchased);
  }

  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
          <button onClick={purchase}>Buy!</button>
        </div>
      ))}
    </div>
  );
}
