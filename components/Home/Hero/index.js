import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";

const images = [
  "/images/main-slider/needy7.jpg",
  "/images/main-slider/needy8.jpg",
  "/images/main-slider/needy9.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer); // Cleanup
  }, [currentIndex, images.length]);

  const heroStyle = {
    background: `linear-gradient(rgba(8,0,58,0.7),rgba(0, 58, 30, 0.462)), url(${images[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background 10s ease-in-out",
  };

  return (
    <div className={`${styles.hero} container`} style={heroStyle}>
      <div className={styles["hero-text"]}>
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
