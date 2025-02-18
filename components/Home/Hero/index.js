import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";

const images = [
  "/images/main-slider/needy8.jpg",
  "/images/main-slider/needy9.jpg",
  "/images/main-slider/needy7.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={`${styles.hero} container`}>
      {/* Background layers */}
      <div className={styles.backgroundContainer}>
        {images.map((img, index) => (
          <div
            key={img}
            className={`${styles.backgroundLayer} ${
              index === currentIndex ? styles.active : ""
            } ${index === prevIndex ? styles.fading : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundPositionX: "left",
              zIndex: index === currentIndex ? 2 : 1,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay (constant) */}
      <div className={styles.gradientOverlay} />

      {/* Content */}
      <div className={styles.heroText}>
        <h1>Achieving Peace through ministering to the Needy</h1>
        <p>
          Divine Assistance Relief Organization (DARO) believes in the power of
          love by touching lives as a tool for healing and bringing the sense of
          humanity to the earth.
        </p>
        <button className="btn">
          Explore More <img src="/images/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
