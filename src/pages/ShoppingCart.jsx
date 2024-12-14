import { useState, useEffect } from "react";
import styles from "../styles/ShopingCart.module.css";
// import axios from "axios";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("cart"));
    setCart(response);
  }, []);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.items}>
            {(cart||[{name: "Your Shopping Cart is Empty"}])?.map( i => (
              <div className={styles.item} key={i.id}>
                <img
                  className={styles.Image}
                  src={"https://picsum.photos/seed/" + i.name + "/200/200.jpg"}
                  alt={i.name}
                  draggable="false"
                />
                <h1 className={styles.text}>{i.name}</h1>
                <h1 className={styles.text}>{i.price?"$":''}{i?.price}</h1>
              </div>
            ))}
          </div>
          <div className={styles.items}>
            <h1>Checkout</h1>
          </div>
        </div>
      </div>
    </>
  );
}
