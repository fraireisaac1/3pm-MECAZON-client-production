import GroceryList from "./GroceryList";
import addToCartFunc from "./AddToCartBtn";
import styles from "../styles/Carousel.module.css";
import { useEffect, useState } from "react";

export default function Carousel({ count, data, setModalData }) {

    const [index, setIndex] = useState(0)
    // const [data, setdata] = useState([]);

    function incrementIndex(num) {
      const next_num = index+num
      if (next_num < 0) {
        setIndex(0);
      } else if (next_num > data.length-count) {
        setIndex(data.length-count);
      } else {
        setIndex(next_num);
      }
  };

  console.log(data);

    return (
      <div className={styles.row}>
        <button className={styles.btn} onClick={() => { incrementIndex(-count); }}>⬅</button>
          <div className={styles.items}>
            {data.slice(index, index + count).map(i => (
              <div className={styles.item} key={i.id}>
                {/* src="https://avatars.githubusercontent.com/u/131179727?s=200&v=4" */}
                <img className={styles.Image} onClick={() => {setModalData(i)}} src={`https://drive.google.com/uc?export=view&id=${/[A-z0-9]{11,}/g.exec(i.product_img)}`} alt="" />
                <div className={styles.subitem}>
                  <h1 className={styles.text}>{i.item}</h1>
                  <h1 className={styles.price}>${i.price_in_usd}</h1>
                  <button onClick={() => {addToCartFunc(i)}} className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        <button className={styles.btn} onClick={() => { incrementIndex(count); }}>➡</button>
      </div>
    );
}