import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

function Hero() {
  let word = [
    "identify plants",
    "see gestures",
    "count reps",
    "sense colors",
    "check safety",
  ];

  const [string, setString] = useState("identify plants");
  const [fadeIn, setFadeIn] = useState("opacity: 0");

  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = index + 1 === word.length ? 0 : index + 1;
      setString(word[index]);
      setFadeIn(" opacity: 1");
    }, 4900);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className={styles.hero_video_mobile}>
        <video loop muted autoPlay className={styles.hero_video}>
          <source
            src={require("../../img/Home_Mobile.mp4")}
            type={"video/mp4"}
          />
        </video>
      </div>
      <div className={styles.hero_left}>
        <h1 className={styles.section_heading}>Train apps to</h1>
        <p
          className={`${styles.section_heading} ${styles.green} ${styles.carousels}`}
        >
          {string}
        </p>
        <h1 className={`${styles.section_text} ${styles.title}`}>
          Lobe helps you train machine learning models with a free, easy to use
          tool.
        </h1>
        <div>
          <button className={styles.hero_btn}>Download</button>
          <button className={styles.watchmore_btn}>
            Watch Tour
            <svg width="39px" height="39px" viewBox="0 0 39 39" version="1.1">
              <title>Watch Tour</title>
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g
                  transform="translate(-362.000000, -12.000000)"
                  fillRule="nonzero"
                >
                  <g transform="translate(232.000000, 12.000000)">
                    <g transform="translate(130.000000, 0.000000)">
                      <circle
                        stroke="#00E1B1"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        cx="19.5"
                        cy="19.5"
                        r="11.5"
                      />
                      <path
                        d="M17.4902612,14.8382719 L24.2283102,18.6284245 C24.709668,18.8991883 24.8803883,19.5089034 24.6096245,19.9902612 C24.5198357,20.1498857 24.3879346,20.2817868 24.2283102,20.3715755 L17.4902612,24.1617281 C17.0089034,24.4324919 16.3991883,24.2617716 16.1284245,23.7804138 C16.0442285,23.6307321 16,23.4618894 16,23.2901525 L16,15.7098475 C16,15.1575627 16.4477153,14.7098475 17,14.7098475 C17.1717369,14.7098475 17.3405796,14.754076 17.4902612,14.8382719 Z"
                        fill="#00E1B1"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.hero_right}>
        <video loop muted autoPlay className={styles.hero_video}>
          <source
            src={require("../../img/Home_Desktop.mp4")}
            type={"video/mp4"}
          />
        </video>
      </div>
    </main>
  );
}

export default Hero;
