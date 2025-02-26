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
      <p className={styles.community}>Our Community</p>
      <h1 className={styles.heading}>
        Welcome to Daro Nigeria a Non Proft Organization
      </h1>
      <div className={styles.buttonGroup}>
        <button className={styles.infoButton}>
          <FaCheckCircle className={styles.icon} /> Prosper in this volatile
        </button>
        <button className={styles.infoButton}>
          <FaCheckCircle className={styles.icon} /> Prosper in this volatile
        </button>
      </div>
      <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don&apos;t look even slightly believable. If you
        are going to use a passage.
      </p>
      <button className={styles.ctaButton}>Learn More</button>
    </section>
  );
};
