import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./profile.module.css";
import { CustomBtn } from "../Layout/donate";

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
      <p className={styles.community}>Our Purpose</p>
      <h1 className={styles.heading}>
        To manifest God's love and compassion in the life of all
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
        The Divine Assistance Relief Organisation (DARO) was established in 2024
        as a humanitarian organization to provide relief and developmental
        assistance to individuals and communities in Nigeria. DARO's mission is
        to improve the quality of life of people in need by assessing needs,
        creating awareness, providing resources, and working with communities,
        organisations, local churches and government. DARO provides assistance
        regardless of ethnicity, political affiliation, gender, or religious
        association. DARO's work includes community development; food security
        and nutrition; protection services; water, sanitation and hygiene
        (WASH); Health Services, Education; Shelter and Reconstruction; Economic
        Recovery and Livelihood; Advocacy and Policy Work, Climate Change
        Adaptation etc. <br />
        We are dedicated to improving the lives of the poor and underserved
        communities in Nigeria through various initiatives and programs. Join us
        in making a difference and bringing hope to those in need.
      </p>
      <p className={styles.description}></p>
      <CustomBtn showHeart="none" value="Learn More" />
    </section>
  );
};
