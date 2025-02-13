import React from "react";
import styles from "./styles.module.css";

const RollOver = () => {
  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeGroup}>
          <div className={styles.text}>*Giving is Loving</div>
          <div className={styles.text}>*Make Friend with society</div>
          <div className={styles.text}>*Your Giving saves souls</div>
          <div className={styles.text}>*Helping the needy is Faith</div>
          <div className={styles.text}>*Make an Impact with us</div>
          <div className={styles.text}>*RESTful API design</div>
          <div className={styles.text}>*CLOUD-NATIVE SOLUTIONS</div>
          <div className={styles.text}>*Microservices architecture</div>
          <div className={styles.text}>*DevOps culture</div>
          <div className={styles.text}>*Full-stack expertise</div>
        </div>
        <div aria-hidden="true" className={styles.marqueeGroup}>
          <div className={styles.text}>*Giving is Loving</div>
          <div className={styles.text}>*Make Friend with society</div>
          <div className={styles.text}>*Your Giving saves souls</div>
          <div className={styles.text}>*Helping the needy is Faith</div>
          <div className={styles.text}>*Make an Impact with us</div>
          <div className={styles.text}>*RESTful API design</div>
          <div className={styles.text}>*CLOUD-NATIVE SOLUTIONS</div>
          <div className={styles.text}>*Microservices architecture</div>
          <div className={styles.text}>*DevOps culture</div>
          <div className={styles.text}>*Full-stack expertise</div>
        </div>
      </div>
    </div>
  );
};

export default RollOver;
