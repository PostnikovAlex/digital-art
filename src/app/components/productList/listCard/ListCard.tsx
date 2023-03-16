import React, { FC } from "react";
import styles from "./styles.module.scss";
import { Iproduct } from "@/app/page";
import Button from "@/app/components/ui/button/Button";
import Image from "next/image";
import useCart from "@/app/hooks/useCart";
type Props = {
  data: {
    image: {
      src: string;
      alt: string;
    };
    category: string;
    name: string;
    price: number;
    id: string;
  };
  handleAddToCart: any;
};

const ListCard: FC<Props> = ({ data, handleAddToCart }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          layout="fill"
          objectFit="cover"
        />
        <div onClick={() => handleAddToCart(data)} className={styles.button}>
          <Button type="button">Add To Cart</Button>
        </div>
      </div>

      <span className={styles.card__category}>{data.category}</span>
      <span className={styles.card__name}>{data.name}</span>
      <span className={styles.card__price}>{"$" + data.price}</span>
    </article>
  );
};

export default ListCard;
