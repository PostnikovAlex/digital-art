import React, { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import Filters from "@/app/components/filters/Filters";
import List from "@/app/components/productList/list/List";
import { Iproduct } from "@/app/page";
import ListCard from "./listCard/ListCard";
type Props = {
  products: Array<Iproduct>;
  handleAddToCart: any;
};

const ProductList: FC<Props> = ({ products, handleAddToCart }) => {
  return (
    <section>
      <div className={styles.listHeader}>
        <div className={styles.listHeader__title}>
          <h3>Photography /</h3> Premium Photos
        </div>
        <div className={styles.sort}>
          {/* <span></span>
          <select name="sorting" id="sort">
            <option value="price">Price</option>
            <option value="alphabetical">alphabetical</option>
          </select> */}
        </div>
      </div>
      <div className={styles.products}>
        <aside className={styles.products__filters}>
          <Filters></Filters>
        </aside>
        <div className={styles.products__list}>
          <List>
            {products &&
              products.map((product) => {
                return (
                  <ListCard
                    handleAddToCart={handleAddToCart}
                    key={product.id}
                    data={product}
                  ></ListCard>
                );
              })}
          </List>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
