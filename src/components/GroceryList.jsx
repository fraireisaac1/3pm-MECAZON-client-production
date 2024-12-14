import styles from "../styles/GroceryList.module.css";
import { useState, useEffect } from "react";

export default function GroceryList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem != null) {
      localStorage.setItem("cart", JSON.stringify(
        [...JSON.parse(localStorage.getItem("cart")) || [],
        selectedItem]
      ));
    }
  }, [selectedItem]);

  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div key={i.id} className={styles.item}>
          <img
            src={"https://picsum.photos/seed/" + i.name + "/200/200.jpg"}
            alt={i.name}
          />
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price}</h1>
            <h2 className={styles.text}>{i.name}</h2>
            <button className={styles.btn} onClick={() => setSelectedItem(i)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
