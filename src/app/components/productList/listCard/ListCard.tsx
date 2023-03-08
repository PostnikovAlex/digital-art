import React, { FC } from "react";
import styles from "./styles.module.scss";
import { Iproduct } from "@/app/page";
import Button from "@/app/components/ui/button/Button";
import Image from "next/image";
type Props = {
  data: {
    image: {
      src: string;
      alt: string;
    };
    category: string;
    name: string;
    price: number;
  };
};

const ListCard: FC<Props> = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__img}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.card__button}>
        <Button type="button">Add To Cart</Button>
      </div>
      <span className={styles.card__category}>{data.category}</span>
      <span className={styles.card__name}>{data.name}</span>
      <span className={styles.card__price}>{"$" + data.price}</span>
    </article>
  );
};

export default ListCard;
