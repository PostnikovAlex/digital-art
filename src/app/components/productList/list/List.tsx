import React, { FC } from "react";
import styles from "./styles.module.scss";
interface Iprops {
  children: React.ReactNode;
}

const List: FC<Iprops> = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default List;
