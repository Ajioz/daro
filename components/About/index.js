import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>a little more</p>
        <section className={styles.intro}>
          <span style={{ color: "lightgray" }}>Our</span>{" "}
          <span className={styles.halfBorderBottom}>Philosophy</span>
        </section>
      </div>
    </div>
  );
};

export default About;
