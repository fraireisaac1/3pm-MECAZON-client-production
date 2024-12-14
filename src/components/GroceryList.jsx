import styles from "../styles/GroceryList.module.css";
import { useState, useEffect } from "react";

export default function GroceryList({ items }) {
  const [purchased, setPurchased] = useState(JSON.parse(sessionStorage.getItem("purchased")) || []);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setPurchased();
  }, []);

  useEffect(() => {
    console.log(purchased, selectedItem);
    if (selectedItem != null) {
      sessionStorage.setItem("purchased", JSON.stringify([...purchased, selectedItem]));
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
            <button
              className={styles.btn}
              onClick={() => {
                alert(i.name);
              }}
            >
              Add to Cart
            </button>
          </div>
          <button onClick={() => setSelectedItem(i)} k={i.id}>
            Buy!
          </button>
        </div>
      ))}
    </div>
  );
}
