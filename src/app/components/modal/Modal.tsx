import React from "react";
import Button from "../ui/button/Button";
type Props = {};

const Modal = (props: Props) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal__close}>
        <span>x</span>
      </div>
      <ul className={styles.modal__list}>
        <li className={styles.modal__listItem}></li>
      </ul>
      <Button type="button">Clear</Button>
    </div>
  );
};
