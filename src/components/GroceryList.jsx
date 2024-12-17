import styles from "../styles/GroceryList.module.css";
import SaveItem from "../components/AddToCartBtn";

export default function GroceryList({ items, setModalData }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div key={i.id} className={styles.item}>
          <img className={styles.Image} onClick={() => {setModalData(i)}} src={`https://drive.google.com/uc?export=view&id=${/[A-z0-9]{11,}/g.exec(i.product_img)}`} alt={i.item} draggable="false"/>
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price_in_usd}</h1>
            <h2 className={styles.text}>{i.item}</h2>
            <button className={styles.btn} onClick={() => SaveItem(i)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
