import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import axios from "axios";

export default function Home({setModalData}) {
  const api = axios.create({
    // baseurl =
    // run a code space on https://github.com/WestMecCoding/3pm-MECAZON-server-production
    // use TeamC-Integration branch
    // command: npm run start:prod
    // go to ports tab in terminal and make the 3000 port public under the visibility column
    baseURL: "https://stunning-umbrella-7v95w67w6qg6cr7v6-3000.app.github.dev/",
  });

  useEffect(()=>{
    const getdata = async () => {
      const response = await api.get("/find/3pm-client-MECAZON/products");
      console.log(response);
      return response.data;
    }
    getdata();
  },[]);

  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/products.json");
        setGroceries(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  return <>
    <Carousel count={Math.ceil(self.innerWidth/200)<10?Math.ceil(self.innerWidth/200):10} setModalData={setModalData} data={groceries}/>
    <div className={styles.banner}>
      <img className={styles.image} src="https://media-public.canva.com/ADwTE/MAGHDfADwTE/1/s.png" alt="Black Man" draggable="false"/>
      <div className={styles.column}>
        <h1 className={styles.title}>Business solutions</h1>
        <p className={styles.text}>Slide for Von dotn slime ur homye. Praesent dui leo, euismod et purus eu, iaculis luctus mauris. Cras a dolor eget nisi aliquet pulvinar eu ut elit. Suspendisse dictum magna quis metus pulvin.</p>
      </div>
    </div>
  </>;
}
