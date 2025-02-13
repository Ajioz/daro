import React from "react";
import styles from "./styles.module.css";

const RollOver = () => {
  return (
    <>
      <div className={styles["marquee-section"]}>
        <div className={styles.marquee}>
          <div className={styles["marquee-group"]}>
            <div className={styles.text}>*Agile methodologies</div>
            <div className={styles.text}>*CLEAN CODE PRACTICES</div>
            <div className={styles.text}>*Scalable architecture</div>
            <div className={styles.text}>*Continuous integration</div>
            <div className={styles.text}>*Test-driven development</div>
            <div className={styles.text}>*RESTful API design</div>
            <div className={styles.text}>*CLOUD-NATIVE SOLUTIONS</div>
            <div className={styles.text}>*Microservices architecture</div>
            <div className={styles.text}>*DevOps culture</div>
            <div className={styles.text}>*Full-stack expertise</div>
          </div>
          <div aria-hidden="true" className="marquee-group">
            <div className={styles.text}>*Agile methodologies</div>
            <div className={styles.text}>*CLEAN CODE PRACTICES</div>
            <div className={styles.text}>*Scalable architecture</div>
            <div className={styles.text}>*Continuous integration</div>
            <div className={styles.text}>*Test-driven development</div>
            <div className={styles.text}>*RESTful API design</div>
            <div className={styles.text}>*CLOUD-NATIVE SOLUTIONS</div>
            <div className={styles.text}>*Microservices architecture</div>
            <div className={styles.text}>*DevOps culture</div>
            <div className={styles.text}>*Full-stack expertise</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RollOver;
