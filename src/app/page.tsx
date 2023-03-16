"use client";
import styles from "./page.module.scss";
import useCart from "./hooks/useCart";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "@firebase/firestore";
import { database } from "../firebase";

import Header from "@/app/components/header/Header";
import Banner from "@/app/components/banner/Bannder";
import DescriptionBlock from "@/app/components/description-block/DescriptionBlock";
import ProductList from "@/app/components/productList/ProductList";
export interface Image {
  src: string;
  alt: string;
}

export interface Iproduct {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  details?: any;
  id: string;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const { items, addToCart, emptyCart, amountInCart } = useCart([]);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const productsRef = doc(
    collection(database, "products"),
    "a7eOUWu8xyEIcQ7f1w9c"
  );
  const getProducts = async () => {
    getDoc(productsRef)
      .then((docSnapshot) => {
        console.log(docSnapshot.data().products);
        setProducts(docSnapshot.data().products);
      })
      .catch((error) => {
        console.error("Error retrieving product: ", error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => console.log(items), [items]);
  return (
    <main className={styles.main}>
      <h1>{amountInCart}</h1>
      <Header amountInCart={amountInCart}></Header>
      <Banner title="Samurai King Resting">
        <picture>
          <source
            media={"(min-width:700px)"}
            srcSet={"/static/banner.jpg"}
          ></source>
          <source
            media={"(min-width:320px)"}
            srcSet={"/static/banner-small.jpg"}
          ></source>
          <img
            src={"/static/banner.jpg"}
            width="100%"
            height="100%"
            alt="banner"
          ></img>
        </picture>
      </Banner>
      <DescriptionBlock></DescriptionBlock>
      <ProductList
        handleAddToCart={handleAddToCart}
        products={products}
      ></ProductList>
    </main>
  );
}
