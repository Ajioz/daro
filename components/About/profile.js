import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./profile.module.css";
import { CustomBtn } from "../Layout/donate";
import { IoClose } from "react-icons/io5";
import { about } from "@/data";

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
  const [Open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!Open);
    console.log("Modal Opened!");
  };
  return (
    <section className={styles.hero}>
      <p className={styles.community}>About Us</p>
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
        <br />
      </p>
      <h4>CORE VALUES (ISEC)</h4>
      <p className={styles.description}>
        1. Integrity: maintaining honesty, transparency and moral uprightness in
        all decisions and actions;
        <p className={styles.description}>
          {" "}
          2. Service: humble dedication to serving others, following the example
          of Jesus Christ;{" "}
        </p>
        <p className={styles.description}>
          {" "}
          3. Empathy: understand and share feelings, thoughts, or experiences of
          other people, and take action or offer support to alleviate their
          pains or struggle appropriately;{" "}
        </p>
        <p className={styles.description}>
          4. Collaboration: Partnering with other organisations, government,
          ministries, local churches and communities to maximize impact.
        </p>
      </p>
      <p className={styles.description}></p>
      <CustomBtn showHeart="none" value="Learn More" onClick={handleModal} />
      {Open && <Modal setOpen={setOpen} />}
    </section>
  );
};

const Modal = ({ setOpen }) => {
  return (
    <div className={styles.modalContainer}>
      <section className={styles.content}>
        <IoClose
          size={25}
          color="#fff"
          className={styles.close}
          onClick={() => setOpen(false)}
        />
        {about.map(({ id, title, description }) => (
          <div key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
