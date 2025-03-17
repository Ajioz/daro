import React from "react";
import styles from "./team.module.css";
import Image from "next/image";
import { team } from "@/data";

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      {team.map(({ id, name, portfolio, image, about }) => {
        const nameSplit = name.split(" ");
        const name1 = nameSplit[0].split("")[0];
        const name2 = nameSplit[1].split("")[0];
        return (
          <section className={styles.memberCard} key={id}>
            <div className={styles.chipCircle}>{name1 + name2}</div>
            <p className={styles.description}>{about}</p>
            <div className={styles.office}>
              <p className={styles.name}>{name}</p>
              <p className={styles.portfolio}>{portfolio}</p>
            </div>
            <div className={styles.chip}>
              <Image src={image} width={100} height={100} alt="teamImg" />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Team;
