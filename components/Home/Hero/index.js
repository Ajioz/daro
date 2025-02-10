import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles["hero-text"]}>
        <h1>Achieving Peace through ministering to the Needy</h1>
        <p>Divine Assistance Relief Organization (DARO) believes in the power of
          love by touching lives as a tool for healing and bringing the sense of
          humanity to the earth.</p>
        <button className="btn">
          Explore More <img src="/images/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
