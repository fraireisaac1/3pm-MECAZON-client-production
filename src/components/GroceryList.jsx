import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items, setModalData }) {
  return (
    <div className={styles.list}>
      {items.map(i => (
        <div onClick={() => {setModalData(i)}} key={i.id} className={styles.item}>
          <img src={"https://picsum.photos/seed/"+i.name+"/200/200.jpg"} alt={i.name} />
          <div className={styles.description}>
            <h1 className={styles.text}>${i.price}</h1>
            <h2 className={styles.text}>{i.name}</h2>
            <button className={styles.btn} onClick={()=>{alert(i)}}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
