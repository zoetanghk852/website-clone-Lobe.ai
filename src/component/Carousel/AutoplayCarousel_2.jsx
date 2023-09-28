import React from "react";
import { CarouselItem } from "./CarouselItem";
import { cardDetails } from "./carousel-config_2";
import styles from "./page.module.css";

export function AutoplayCarousel2() {
  return (
    <div className={styles.slider2}>
      <div className={styles.slide_track2}>
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
