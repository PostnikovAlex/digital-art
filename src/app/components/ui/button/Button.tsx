import React, { FC } from "react";
import styles from "./styles.module.scss";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  children: any;
};

const Button: FC<Props> = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
