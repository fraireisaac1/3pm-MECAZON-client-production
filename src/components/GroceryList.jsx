import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <img src="https://avatars.githubusercontent.com/u/131179727?s=200&v=4" alt={i.name} />
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
        </div>
      ))}
    </div>
  );
}
