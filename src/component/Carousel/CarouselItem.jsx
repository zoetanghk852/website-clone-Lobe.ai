import React from "react";
import styles from "./page.module.css";

export function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <span className={styles.slider}>
      <img src={imgUrl} alt={imgTitle}></img>
    </span>
  );
}
