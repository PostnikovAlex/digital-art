import { useEffect, useState } from "react";

type TProduct = {
  id: number;
  name: string;
  price: number;
};

type TUseCart = {
  items: TProduct[];
  addToCart: (product: TProduct) => void;
  emptyCart: () => void;
};

const useCart = (initialItems: TProduct[] = []) => {
  const [items, setItems] = useState<Array<TProduct>>([]);
  const addToCart = (product: TProduct): void => {
    const productExist = items.find((item) => item.id === product.id);
    if (productExist) {
      console.log("existing");
    } else {
      setItems((prevState) => {
        console.log("added");
        return [...prevState, product];
      });
    }
  };
  const emptyCart = () => {
    setItems([]);
    console.log("emptied");
  };
  const amountInCart = items.length;
  console.log("items", items);
  return { items, addToCart, emptyCart, amountInCart };
};

export default useCart;
