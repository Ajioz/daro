import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <HeroSection />
      </div>
      <div className={styles.right}>
        <CampaignFundsCard amount="2,322" label="Campaing Fund" />
      </div>
    </div>
  );
};

export default Profile;

export const CampaignFundsCard = ({ amount, label }) => {
  return (
    <div className={styles.card}>
      <div className={styles.fundBubble}>
        <span className={styles.amount}>{amount}</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
};

// components/HeroSection.js
export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.community}>Our Mission</p>
      <h1 className={styles.heading}>
        Empowering the Poor and Underserved in Nigeria
      </h1>
      <div className={styles.buttonGroup}>
        <button className={styles.infoButton}>
          <FaCheckCircle className={styles.icon} /> Suport US
        </button>
        <button className={styles.infoButton}>
          <FaCheckCircle className={styles.icon} /> Join Our Mission
        </button>
      </div>
      <p className={styles.description}>
        We are dedicated to improving the lives of the poor and underserved
        communities in Nigeria through various initiatives and programs. Join us
        in making a difference and bringing hope to those in need.
      </p>
      <button className={styles.ctaButton}>Learn More</button>
    </section>
  );
};
