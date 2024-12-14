import { useState, useEffect } from "react";
export default function AddToCartBtn() {
    const [Item, setItem] = useState(null);
    
    useEffect(() => {
    if (Item != null) {
        localStorage.setItem("cart", JSON.stringify(
        [...JSON.parse(localStorage.getItem("cart")) || [],
        Item]
        ));
    }
    }, [Item]);
    return setItem;
}