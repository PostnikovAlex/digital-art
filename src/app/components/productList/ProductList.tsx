import React, { FC } from "react";
import styles from "./styles.module.scss";
import Filters from "@/app/components/filters/Filters";
import List from "@/app/components/productList/list/List";
import { Iproduct } from "@/app/page";
import ListCard from "./listCard/ListCard";
type Props = {
  products: Array<Iproduct>;
};

const ProductList: FC<Props> = ({ products }) => {
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
                // return <span key={product.name}>{product.name}</span>;
                return <ListCard key={product.name} data={product}></ListCard>;
              })}
          </List>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
