import React from "react";
import Profile from "./profile";
import Campaign from "./campaign";
import Team from "./team";
import styles from "./about.module.css";

const AboutComponent = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Campaign />
      <Team />
    </div>
  );
};

export default AboutComponent;
