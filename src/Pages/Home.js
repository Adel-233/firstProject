import Basket from "../components/Basket";
import Cart from "../components/Cart";
import Sizes from "../components/Sizes";
import Products from "../components/Products";
import axios from "axios";
import { useState, useEffect } from "react";
import Pay from "../components/Pay";

export default function Home() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((response) => setStores(response.data.products));
  }, []);
  return (
    <>
      <Basket />
      <Cart />
      {/* <Pay /> */}
      <Sizes />
      <Products stores={stores} />
    </>
  );
}
