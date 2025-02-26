import React from "react";
import styles from "./DesktopNav.module.css";
import { IoBasket, IoHeart, IoSearch } from "react-icons/io5";

const Donate = () => {
  return (
    <div className={styles.donate}>
      <IoSearch size={30} />
      <IoBasket size={30} />
      <CustomBtn showHeart={"block"} value={"Donate"} />
    </div>
  );
};

export default Donate;

export const CustomBtn = ({ value, showHeart }) => {
  return (
    <div className={styles.donateBtn}>
      <IoHeart size={20} style={{ zIndex: 1, display: showHeart }} />
      <span>{value}</span>
    </div>
  );
};
