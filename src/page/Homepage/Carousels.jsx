import React from "react";
import styles from "./page.module.css";
import { AutoplayCarousel } from "../../component/Carousel/AutoplayCarousel";

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

          {/* <video
            loop
            muted
            autoPlay
            className={styles.carousel_item}
            src="https://www.lobe.ai/assets/examples/Painting%20with%20Mike.mp4"
          /> */}

          {/* <video
            loop
            muted
            autoPlay
            className={styles.carousel_item}
            src="https://www.lobe.ai/assets/examples/Plants.mp4"
          /> */}

          {/* <video
            loop
            muted
            autoPlay
            src="https://www.lobe.ai/assets/examples/Mask%20Up.mp4"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default carousels;
