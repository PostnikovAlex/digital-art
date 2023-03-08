import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
function DescriptionBlock() {
  return (
    <section className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.description__header}>
          About the Samurai King Resting
        </h2>
        <span className={styles.description__subheader}>Pets</span>
        <span className={styles.description__text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.So how did the classical Latin
          become so incoherent? According to McClintock, a 15th century
          typesetter likely scrambled part of Cicero's De Finibus in order to
          provide placeholder text to mockup various fonts for a type specimen
          book.So how did the classical Latin become so incoherent? According to
          McClintock.
        </span>
      </div>
      <div className={styles.saleBlock}>
        <span className={styles.saleBlock__header}>People also buy</span>
        <div className={styles.saleBlock__images}>
          <Image src="/static/balloon.jpg" width={115} height={145} alt="" />
          <Image src="/static/bench.jpg" width={115} height={145} alt="" />
          <Image src="/static/wall.jpg" width={115} height={145} alt="" />
        </div>
        <div className={styles.saleBlock__details}>
          <b>Details</b>
          <span>Size: 1020 x 1020 pixel</span>
          <span>Size: 15 mb</span>
        </div>
      </div>
    </section>
  );
}

export default DescriptionBlock;
