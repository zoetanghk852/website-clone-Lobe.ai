import React from "react";
import styles from "./page.module.css";

export default function Tour() {
  return (
    <div>
      <h1 className={styles.title}>
        Lobe
        <span className={styles.title_green}> Tour</span>
      </h1>
      <div className={styles.context_container}>
        <p className={styles.context}>
          Build your first machine learning model in ten minutes. No code or
          experience required.
        </p>
      </div>
      <div className={styles.video_container}>
        <img
          className={styles.videoPic}
          src={require("../../images/Video.jpg")}
          loading="lazy"
          alt="Learn more about Lobe by watching our tour video."
        ></img>
      </div>
    </div>
  );
}
