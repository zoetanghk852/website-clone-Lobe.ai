import React from "react";
import styles from "./page.module.css";
import { AutoplayCarousel } from "../../component/Carousel/AutoplayCarousel";
import { AutoplayCarousel2 } from "../../component/Carousel/AutoplayCarousel_2";

function carousels() {
  return (
    <section className={styles.section_dark} style={{ overflow: "hidden" }}>
      <div className={styles.section_content}>
        <h2 className={styles.section_heading}>
          Lobe
          <span className={`${styles.section_heading} ${styles.green}`}>
            Examples
          </span>
        </h2>
        <p className={styles.section_text}>
          One tool, endless possibilities. Discover all the things you can train
          your app to do with Lobe.
        </p>

        <div>
          <AutoplayCarousel />
          <AutoplayCarousel2 />
        </div>
      </div>
    </section>
  );
}

export default carousels;
