import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <img src="https://avatars.githubusercontent.com/u/131179727?s=200&v=4" alt={i.name} />
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price}</h1>
            <h2 className={styles.text}>{i.name}</h2>
            <button className={styles.btn}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
