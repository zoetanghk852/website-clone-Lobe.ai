import React from "react";
import styles from "./page.module.css";

function Templates() {
  return (
    <section className={styles.section_dark}>
      <div className={styles.section_content}>
        <h1 className={styles.section_heading}>
          Machine learning <br />
          made
          <span className={`${styles.section_heading} ${styles.green}`}>
            {` easy`}
          </span>
        </h1>
        <p className={styles.section_text}>
          Lobe has everything you need to bring your machine learning ideas to
          life. Just show it examples of what you want it to learn, and it
          automatically trains a custom machine learning model that can be
          shipped in your app.
        </p>

        <img
          className={styles.screenshot}
          src={require("../../images/screenshot.jpg")}
          alt="screenshot"
        />

        <div className={`${styles.feature}`}>
          <div className={styles.feature_container}>
            <div className={styles.feature_card}>
              <video loop muted autoPlay className={styles.featureicon}>
                <source
                  src={require("../../videos/features_Easy.mp4")}
                  type={"video/mp4"}
                />
              </video>
              <h1 className={styles.feature_title}>Easy to Use</h1>
              <p className={styles.feature_p}>
                Designed to be easy enough for anyone to use. No code or
                experience required.
              </p>
            </div>
            <div className={styles.feature_card}>
              <video loop muted autoPlay className={styles.featureicon}>
                <source
                  src={require("../../videos/features_Private.mp4")}
                  type={"video/mp4"}
                />
              </video>
              <h1 className={styles.feature_title}>Free and Private</h1>
              <p className={styles.feature_p}>
                rain for free on your own computer without uploading your data
                to the cloud.
              </p>
            </div>
            <div className={styles.feature_card}>
              <video loop muted autoPlay className={styles.featureicon}>
                <source
                  src={require("../../videos/features_Anywhere.mp4")}
                  type={"video/mp4"}
                />
              </video>
              <h1 className={styles.feature_title}>Export Anywhere</h1>
              <p className={styles.feature_p}>
                Available for Mac and Windows. Export your model and ship it on
                any platform you choose.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.feature_mobile}>
          <div className={styles.feature_card}>
            <div className={styles.card_icon}>
              <img
                className={styles.featureicon}
                alt="featureicon"
                src="https://www.lobe.ai/assets/features/Easy.jpg"
              />
            </div>
            <div className={styles.card_text}>
              <h4 style={{ fontWeight: "800" }}>Easy to Use</h4>
              <p>
                Designed to be easy enough for anyone to use. No code or
                experience required.
              </p>
            </div>
          </div>
          <div className={styles.feature_card}>
            <div className={styles.card_icon}>
              <img
                alt="featureicon"
                className={styles.featureicon}
                src="https://www.lobe.ai/assets/features/Private.jpg"
              />
            </div>
            <div className={styles.card_text}>
              <h4 style={{ fontWeight: "800" }}>Free and Private</h4>
              <p>
                rain for free on your own computer without uploading your data
                to the cloud.
              </p>
            </div>
          </div>
          <div className={styles.feature_card}>
            <div className={styles.card_icon}>
              <img
                alt="featureicon"
                className={styles.featureicon}
                src="https://www.lobe.ai/assets/features/Anywhere.jpg"
              />
            </div>
            <div className={styles.card_text}>
              <h4 style={{ fontWeight: "800" }}>Export Anywhere</h4>
              <p>
                Available for Mac and Windows. Export your model and ship it on
                any platform you choose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_content}>
        <h1 className={styles.section_heading}>
          <span className={`${styles.section_heading} ${styles.green}`}>
            Project
          </span>
          {` Templates`}
        </h1>
        <p className={styles.section_text}>
          Lobe will automatically select the right machine learning architecture
          for your project. Image classification is available now, with more
          templates coming soon.
        </p>
        <div className={`${styles.cards_wrapper} ${styles.card_Desktop}`}>
          <div className={styles.cards_container}>
            <img
              alt="cardicon"
              className={styles.cardicon}
              src="https://www.lobe.ai/assets/modelTypes/Classification.jpg"
            />
            <h6 className={styles.card_title}>Image Classification</h6>
            <p className={styles.card_p}>
              Label an image based on its content.
            </p>
          </div>
          <div className={styles.cards_container}>
            <img
              alt="cardicon"
              className={styles.cardicon}
              src="https://www.lobe.ai/assets/modelTypes/Detection.jpg"
            />
            <h6 className={styles.card_title}>Object Detection</h6>
            <p className={styles.card_p}>
              Locate an object inside of an image.
            </p>
          </div>
          <div className={styles.cards_container}>
            <img
              alt="cardicon"
              className={styles.cardicon}
              src="https://www.lobe.ai/assets/modelTypes/Tabular.jpg"
            />
            <h6 className={styles.card_title}>Data Classification</h6>
            <p className={styles.card_p}>
              Label data in a table based on its content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Templates;
