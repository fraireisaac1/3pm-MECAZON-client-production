import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchResults() {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("/dummy-data/groceries.json");
                setProducts(response.data);
            } catch (err) {
                console.error("something went wrong fetching products", err);
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <>

        </>
    );
}