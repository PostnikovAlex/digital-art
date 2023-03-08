import React from "react";
import styles from "./styles.module.scss";
import Button from "@/app/components/ui/button/Button.tsx";
function Header({ title, children }) {
  const addToCartHandler = () => {
    console.log("pushed");
  };
  return (
    <section className={styles.banner}>
      <div className={styles.banner__header}>
        <h1>{title}</h1>
        <Button>ADD TO CART</Button>
      </div>
      <div className={styles.banner__image}>{children}</div>
    </section>
  );
}

export default Header;
