import React from "react";
import styles from "./page.module.css";

function Train() {
  return (
    <section className={styles.section_train}>
      <div className={styles.Label_Left}>
        <span className={styles.section_heading}>Label, Train,</span>
        <span className={`${styles.section_heading} ${styles.green}`}>
          {` use`}
        </span>
        <p className={styles.section_text}>
          Lobe simplifies the process of machine learning into three easy steps.
          Collect and label your images. Train your model and understand your
          results. Then play, improve, and export your model.
        </p>{" "}
      </div>
      <img
        className={styles.Label}
        src={require("../../img/Label_one.jpg")}
        alt="labelOne"
      />

      <div className={styles.Label_Left}>
        <span className={styles.section_heading}>
          <span className={`${styles.section_heading} ${styles.green}`}>
            {`Label `}
          </span>
          your images
        </span>
        <p className={`${styles.section_text} ${styles.Label_text}`}>
          Collect bursts using your webcam, or drag in a folder of images from
          your computer. Then quickly label your images to create a machine
          learning dataset.
        </p>
      </div>
      <img
        className={styles.Label}
        src={require("../../img/Label_two.jpg")}
        alt="labelTwo"
      />

      <div className={styles.Label_right}>
        <span className={styles.section_heading}>
          <span className={`${styles.section_heading} ${styles.green}`}>
            {`Train `}
          </span>
          automatically
        </span>
        <p className={`${styles.section_text} ${styles.Label_text}`}>
          Automatically train on your own computer without any setup or
          configuration. Understand the strengths and weaknesses of your model
          with live visual results.
        </p>
      </div>
      <img
        className={styles.Label}
        src={require("../../img/Label_three.jpg")}
        alt="labelThree"
      />

      <div className={styles.Label_Left}>
        <span className={styles.section_heading}>
          <span className={`${styles.section_heading} ${styles.green}`}>
            {`Use `}
          </span>
          your model
        </span>
        <p className={`${styles.section_text} ${styles.Label_text}`}>
          Use your model with your webcam or images from your computer. Improve
          your results by giving your model feedback on its predictions, then
          finally export it to your app.
        </p>
      </div>
    </section>
  );
}

export default Train;
