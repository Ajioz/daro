import React from "react";
import styles from "./DesktopNav.module.css";
import { IoBasket, IoHeart, IoSearch } from "react-icons/io5";

const Donate = () => {
  return (
    <div className={styles.donate}>
      <IoSearch size={30} />
      <IoBasket size={30} />
      <div className={styles.donateBtn}>
        <IoHeart size={20} style={{ zIndex: 1 }} />
        <span>Donate</span>
      </div>
    </div>
  );
};

export default Donate;
