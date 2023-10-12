import React from "react";
import styles from "../../style/carousel.module.css";

export function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <span className={styles.slider}>
      <video
        loop
        muted
        autoPlay
        className={styles.carousel_item}
        src={imgUrl}
        alt={imgTitle}
      ></video>
    </span>
  );
}
