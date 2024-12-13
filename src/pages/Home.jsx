import { useEffect } from "react";
import Carousel from "../components/Carousel";
// import axios from "axios";

export default function Home() {
  // const api = axios.create({
  //   baseurl: import.meta.env.VITE_API_URI_DEV
  // });
  // const getdata = async () => {
  //   const response = await api.get('/api-endpoint')
  //   console.log(response);
  //   return response.data;
  // }

  // useEffect(()=>{
  //   getdata();
  // },[]);

  return <>
    <h1>Return Data</h1>
    <Carousel />
  </>;
}
