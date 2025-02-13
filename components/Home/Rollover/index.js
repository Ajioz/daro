import React from "react";
import styles from "./styles.module.css";

const RollOver = () => {
  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeGroup}>
          <div className={styles.text}>*Promoting Education for All</div>
          <div className={styles.text}>*Empowering Local Communities</div>
          <div className={styles.text}>*Sustainable Development Goals</div>
          <div className={styles.text}>*Environmental Conservation</div>
          <div className={styles.text}>*Advocating for Equal Rights</div>
          <div className={styles.text}>*Supporting Small Businesses</div>
          <div className={styles.text}>*Innovative Agricultural Practices</div>
          <div className={styles.text}>*Cultural Heritage Preservation</div>
          <div className={styles.text}>*Health and Wellness Programs</div>
          <div className={styles.text}>*Youth Empowerment Initiatives</div>
        </div>
        <div aria-hidden="true" className={styles.marqueeGroup}>
          <div className={styles.text}>*Promoting Education for All</div>
          <div className={styles.text}>*Empowering Local Communities</div>
          <div className={styles.text}>*Sustainable Development Goals</div>
          <div className={styles.text}>*Environmental Conservation</div>
          <div className={styles.text}>*Advocating for Equal Rights</div>
          <div className={styles.text}>*Supporting Small Businesses</div>
          <div className={styles.text}>*Innovative Agricultural Practices</div>
          <div className={styles.text}>*Cultural Heritage Preservation</div>
          <div className={styles.text}>*Health and Wellness Programs</div>
          <div className={styles.text}>*Youth Empowerment Initiatives</div>
        </div>
      </div>
    </div>
  );
};

export default RollOver;
