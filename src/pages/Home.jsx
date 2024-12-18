import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import axios from "axios";
import baseURL from "../../baseURL";

export default function Home({setModalData}) {
  const api = baseURL();
  
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getdata = async () => {
      const response = await api.get("/find/3pm-client-MECAZON/products");
      let data = response.data;
      console.log(data);
      setProducts(data);
      return response.data;
    }
    getdata();
  },[]);

  // useEffect(() => {
  //   async function fetchproducts() {
  //     try {
  //       const response = await axios.get("/dummy-data/products.json");
  //       setProducts(response.data);
  //     } catch (err) {
  //       console.error("something went wrong fetching products", err);
  //     }
  //   }
  //   fetchproducts();
  // }, []);

  return <>
    <Carousel count={Math.ceil(self.innerWidth/200)<10?Math.ceil(self.innerWidth/200):10} setModalData={setModalData} data={products}/>
    <div className={styles.banner}>
      <img className={styles.image} src="https://media-public.canva.com/ADwTE/MAGHDfADwTE/1/s.png" alt="Black Man" draggable="false"/>
      <div className={styles.column}>
        <h1 className={styles.title}>Business solutions</h1>
        <p className={styles.text}>Slide for Von dotn slime ur homye. Praesent dui leo, euismod et purus eu, iaculis luctus mauris. Cras a dolor eget nisi aliquet pulvinar eu ut elit. Suspendisse dictum magna quis metus pulvin.</p>
      </div>
    </div>
  </>;
}
