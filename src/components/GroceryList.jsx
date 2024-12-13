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
          <img src={"https://picsum.photos/seed/"+i.name+"/200/200.jpg"} alt={i.name} />
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price}</h1>
            <h2 className={styles.text}>{i.name}</h2>
            <button className={styles.btn} onClick={()=>{alert(i.name)}}>Add to Cart</button>
          </div>
          <button onClick={purchase} k={i.id}>Buy!</button>
        </div>
      ))}
    </div>
  );
}
