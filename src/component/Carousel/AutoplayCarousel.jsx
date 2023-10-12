import React from "react";
import { CarouselItem } from "./CarouselItem";
import { cardDetails } from "./carousel-config";
import styles from "../../style/carousel.module.css";

export function AutoplayCarousel() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {Object.keys(cardDetails).map((detailKey, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
