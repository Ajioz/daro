import React from "react";
import styles from "./philosophy.module.css";
import Image from "next/image";

const About = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <p>a little more</p>
        <section className={styles.intro}>
          <span style={{ color: "lightgray" }}>Our</span>{" "}
          <span className={styles.halfBorderBottom}>Philosophy</span>
        </section>
      </div>
      <div className={styles.body}>
        <section className={styles.bodyWrapper}>
          <div className={styles.bodyImage}>
            <Image
              src="/images/main/help.png"
              alt="philosophy"
              width={450}
              height={258}
            />
          </div>
          <div className={styles.bodyText}>
            <h1>We serve Humanity</h1>
            <p>
              We are a team of compassionate individuals who believe in the
              power of community, solidarity, and collective action to create a
              brighter future for all. Our mission is to uplift individuals and
              communities by providing critical support, resources, and guidance
              to those facing adversity.
            </p>
            <br />
            <p>
              We believe that no one should struggle alone, and through direct
              aid, education, and sustainable solutions, we strive to empower
              people to overcome challenges, restore hope, and build a
              foundation for lasting change. Together, we’re committed to
              fostering dignity, equity, and opportunity for everyone we serve.
            </p>
            <button>
              <span>Learn More</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
