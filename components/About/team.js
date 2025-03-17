import React from "react";
import styles from "./team.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <section className={styles.memberCard}>
        <div className={styles.chipCircle}>AS</div>
        <p className={styles.description}>
          Emmanuel Ajiroghene founded DARO in 2024 and serves as its Executive
          Director. Prior to this, he established Loving the Least of These
          (LLOT-Support), an initiative under the SDA Church in Calabar, where
          he chaired the committee overseeing it's social activities from 2020
          to 2023. A seasoned missionary volunteer, he has served in numerous
          fields and is an Elder of the Seventh-day Adventist Church.
        </p>
        <div className={styles.office}>
          <p className={styles.name}>Emma</p>
          <p className={styles.portfolio}>CEO</p>
        </div>
        <div className={styles.chip}>
          <Image src={"/image/src.png"} width={20} height={20} alt="teamImg" />
        </div>
      </section>
    </div>
  );
};

export default Team;
